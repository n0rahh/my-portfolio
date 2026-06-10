import os
import time
from datetime import datetime

from bson import ObjectId
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Response
from fastapi.middleware.cors import CORSMiddleware
from pymongo import ASCENDING, MongoClient
from starlette.status import HTTP_404_NOT_FOUND, HTTP_500_INTERNAL_SERVER_ERROR

from models import ContactForm, Experiences, ProjectsList, Skills
from telegram_service import send_telegram_notification

load_dotenv()

app = FastAPI()

origins = os.getenv('CORS_ALLOW_ORIGINS', 'http://localhost:3000').split(',')

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)

MONGO_URI = os.getenv('MONGO_URI', 'mongodb://localhost:27017')
client = MongoClient(MONGO_URI)
db = client.portfolio

# Portfolio content changes rarely, so read endpoints are cached in memory and
# browsers/CDNs are allowed to cache responses too.
CACHE_TTL_SECONDS = int(os.getenv('CACHE_TTL_SECONDS', '300'))
_cache: dict[str, tuple[float, object]] = {}


def cached(key: str, producer):
    entry = _cache.get(key)
    if entry and time.monotonic() - entry[0] < CACHE_TTL_SECONDS:
        return entry[1]

    value = producer()
    _cache[key] = (time.monotonic(), value)
    return value


def set_cache_headers(response: Response):
    response.headers["Cache-Control"] = f"public, max-age={CACHE_TTL_SECONDS}"


def serialize_id(document: dict) -> dict:
    document["id"] = str(document.pop("_id"))
    return document


@app.get("/skills/all")
async def get_skills(response: Response):
    try:
        def fetch():
            categories_cursor = (
                db.skill_categories
                .find({"active": True}, {"name": 1, "_id": 0})
                .sort("order", ASCENDING)
            )
            category_names = [category['name'] for category in categories_cursor]

            if not category_names:
                return {"skills": [], "skillCategories": []}

            skills_cursor = db.skills.find({"type": {"$in": category_names}})
            skills = [Skills(**skill).model_dump(mode='json') for skill in skills_cursor]

            return {"skills": skills, "skillCategories": category_names}

        set_cache_headers(response)
        return cached("skills", fetch)
    except Exception as e:
        print(f"Error fetching skills: {e}")
        raise HTTPException(
            status_code=HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while fetching skills. Please try again later."
        )


@app.get("/projects/all")
async def get_projects(response: Response):
    try:
        def fetch():
            projects_cursor = db.projects.find(
                {"active": True},
                {"title": 1, "order": 1, "technologies": 1, "category": 1, "tileUrl": 1}
            ).sort("order", ASCENDING)

            projects = [ProjectsList(**project).model_dump(mode='json') for project in projects_cursor]

            return {"projects": projects}

        set_cache_headers(response)
        return cached("projects", fetch)
    except Exception as e:
        print(f"Error fetching projects: {e}")
        raise HTTPException(
            status_code=HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while fetching projects. Please try again later."
        )


@app.get("/projects/{project_id}")
async def get_project(project_id: str, response: Response):
    if not ObjectId.is_valid(project_id):
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail="Project not found.")

    try:
        def fetch():
            document = db.projects.find_one({"_id": ObjectId(project_id), "active": True})
            return {"project": serialize_id(document)} if document else None

        result = cached(f"project:{project_id}", fetch)
    except Exception as e:
        print(f"Error fetching project {project_id}: {e}")
        raise HTTPException(
            status_code=HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while fetching the project. Please try again later."
        )

    if result is None:
        raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail="Project not found.")

    set_cache_headers(response)
    return result


@app.get("/experiences/all")
async def get_experiences(response: Response):
    try:
        def fetch():
            experiences_cursor = db.experiences.find({"active": True}).sort('order', ASCENDING)

            experiences = [Experiences(**exp).model_dump(mode='json') for exp in experiences_cursor]

            return {"experiences": experiences}

        set_cache_headers(response)
        return cached("experiences", fetch)
    except Exception as e:
        print(f"Error fetching experiences: {e}")
        raise HTTPException(
            status_code=HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while fetching experiences. Please try again later."
        )


@app.post("/contact")
async def contact(form: ContactForm):
    try:
        inquiry_dict = {
            "_id": ObjectId(),
            "name": form.name,
            "email": form.email,
            "message": form.message,
            "fileBase64": form.fileBase64,
            "createdAt": datetime.now()
        }

        db.inquiries.insert_one(inquiry_dict)

        file_info = "File attached." if form.fileBase64 else "No file attached."

        message = (
            f"*NEW CONTACT INQUIRY:*\n\n"
            f"----------------------------------------\n"
            f"*Name:* {form.name}\n"
            f"*Email:* {form.email}\n"
            f"*Attachment:* {file_info}\n"
            f"----------------------------------------\n\n"
            f"*Message:*\n{form.message}"
        )

        notification_successful = await send_telegram_notification(message)

        if not notification_successful:
            print("Warning: Failed to send notification to Telegram.")

        return {"message": "Your message has been received. Thank you!"}
    except Exception as e:
        print(f"Error submitting contact form: {e}")
        raise HTTPException(
            status_code=HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while submitting the contact form. Please try again later."
        )
