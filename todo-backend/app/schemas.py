from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class ToDoBase(BaseModel):
    title: str
    description: Optional[str] = None
    completed: bool
    due_date: Optional[datetime] = None

class ToDoCreate(ToDoBase):
    pass

class ToDoUpdate(ToDoBase):
    pass

class ToDo(ToDoBase):
    id: int

    class Config:
        orm_mode = True