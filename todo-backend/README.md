# 🧠 Backend – FastAPI To-Do API

This is the backend for the To-Do List Management System, built using **FastAPI**, **SQLAlchemy**, and **SQLite**.

---

## ✅ Features

- ✅ Get all to-do items
- ✅ Create a new to-do item
- ✅ Update an existing item
- ✅ Delete an item
- ✅ File-based SQLite DB for persistence
- ✅ CORS enabled for frontend integration

---

## 📦 Tech Stack

- FastAPI
- SQLAlchemy
- SQLite
- Uvicorn (ASGI server)

---

## 🚀 Getting Started

### 1. Clone the project

```bash
cd todo-backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
