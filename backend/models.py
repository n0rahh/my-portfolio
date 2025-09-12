from typing import Optional, List, Union
from pydantic import BaseModel, Field
from enum import Enum
from bson import ObjectId

# Base setup
class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v, values=None): 
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __get_pydantic_json_schema__(cls, field_schema: dict):
        field_schema.update(type="string")

class MongoBaseModel(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id")

    class Config:
        json_encoders = {
            ObjectId: str
        }
        arbitrary_types_allowed = True
        populate_by_name = True

# Enums and Sub-models
class SkillTypes(str, Enum):
    frontend = "frontend"
    backend = "backend"
    programming = "programming"
    devops = "devops"
    mobile = "mobile"
    other = "other"

class Technology(BaseModel):
    name: str
    icon: str
    category: str

class ContactForm(BaseModel):
    name: str
    email: str
    message: str
    file: Union[bytes, None] = None

class ProjectsList(MongoBaseModel):
    title: str
    order: int
    technologies: List[Technology]
    category: str
    tileUrl: str

# Models
class SkillCategories(MongoBaseModel):
    name: SkillTypes
    active: bool = True

class Skills(MongoBaseModel):
    name: str
    percentage: str
    type: SkillTypes

class Projects(MongoBaseModel):
    title: str
    shortDescription: str
    longDescription: str
    keyAccomplishments: List[str]
    technologies: List[Technology]
    sourceCodeUrl: Optional[str] = None
    projectUrl: Optional[str] = None
    images: List[str]
    order: int
    active: bool = True
    category: str
    tileUrl: str