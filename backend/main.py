from fastapi import FastAPI, HTTPException
from starlette.status import HTTP_500_INTERNAL_SERVER_ERROR
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from bson import ObjectId

from models import ProjectsList, Skills, Experiences, ContactForm
from pymongo import MongoClient, ASCENDING

from dotenv import load_dotenv
import os

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


@app.get("/skills/all")
async def get_skills():
    try:
        active_categories_cursor = db.skill_categories.find({"active": True}, {"name": 1, "_id": 0})
        active_categories_names = [cat['name'] for cat in active_categories_cursor]

        if not active_categories_names:
            return {"skills": [], "skillCategories": []}

        skills_cursor = db.skills.find({"type": {"$in": active_categories_names}})
        skills = [Skills(**skill).model_dump(mode='json') for skill in skills_cursor]

        return {"skills": skills, "skillCategories": active_categories_names}

    except Exception as e:
        print(f"Error fetching skills: {e}")
        raise HTTPException(
            status_code=HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while fetching skills. Please try again later."
        )


@app.get("/projects/all")
async def get_projects():
    try:
        projects_cursor = db.projects.find(
            {"active": True},
            {"id": 1, "title": 1, "order": 1, "technologies": 1, "category": 1, "tileUrl": 1}
        ).sort("order", ASCENDING)

        projects = [ProjectsList(**project).model_dump(mode='json') for project in projects_cursor]

        return {"projects": projects}
    except Exception as e:
        print(f"Error fetching projects: {e}")
        raise HTTPException(
            status_code=HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while fetching projects. Please try again later."
        )


@app.get("/experiences/all")
async def get_experiences():
    try:
        experiences_cursor = db.experiences.find({"active": True}).sort('order', ASCENDING)

        experiences = [Experiences(**exp).model_dump(mode='json') for exp in experiences_cursor]

        return {"experiences": experiences}
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

        return {"message": "Your message has been received. Thank you!"}
    except Exception as e:
        print(f"Error submitting contact form: {e}")
        raise HTTPException(
            status_code=HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while submitting the contact form. Please try again later."
        )