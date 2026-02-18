# 🚀 FastAPI + MongoDB + Frontend (Dockerized)

This project is a simple User Management application built using:
FastAPI (Backend API)
MongoDB (Database)
HTML + JavaScript (Frontend)
Docker & Docker Compose (Containerization)

# Project Structure
```text
Gen-AI_FastApi
│
├── mongo_db
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── main.py
│   └── requirements.txt
│
└── frontend
    ├── Dockerfile
    ├── index.html
    └── script.js
```
# ✅ Prerequisites
Make sure the following are installed on your system:
Docker Desktop (Windows / Mac / Linux)
Docker Compose (comes with Docker Desktop)

# Verify installation:
```bash
docker --version
docker compose version
```
# ▶️ Steps to Run the Application
# 1️⃣ Clone or Download the Project

```bash
git clone <repository-url>
cd Gen-AI_FastApi
cd mongo_db
docker compose up --build -d
docker compose ps
```
# Expected containers:
```text
mongodb
fastapi-app
frontend-app
```
# 🌐 Access the Application

Frontend UI http://localhost:3000
API Swagger Docs http://localhost:8000/docs
#Frontend UI

#API Swagger Docs

