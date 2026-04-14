# 🧴 SkinSense – AI Skincare Analysis System


SkinSense is a full-stack AI-powered skincare analysis platform that captures a user’s face image, analyzes skin condition using an ML model, and returns personalized skincare insights along with product recommendations.

This project demonstrates **real-world microservice architecture, API communication, and AI integration**.



# 🎯 Project Objective

This project is designed to help students understand:

* Full-stack application development
* Microservices architecture (Frontend + Backend + ML Service)
* REST API communication between services
* Image upload handling (multipart/form-data)
* Integration of AI/ML into real applications
* External API usage (RapidAPI)
* Debugging distributed systems

---

# 🧠 System Architecture

```text id="arch1"
📸 React Frontend (Camera Capture)
        ↓
☕ Spring Boot Backend (/api/skin/analyze)
        ↓
🤖 FastAPI ML Service (/predict)
        ↓
🧠 AI Model Output (Skin Type + Concern)
        ↓
🌐 RapidAPI (Product Recommendations)
        ↓
📦 Final Response → Frontend UI
```

---

## 📦 Prerequisites

Make sure you have installed:

- Node.js (v16+)
- Java 17+
- Maven
- Python 3.8+

# 🛠️ Tech Stack

## 🎨 Frontend

* React (Vite)
* TypeScript
* Tailwind CSS
* Axios

## ☕ Backend

* Spring Boot (Java 17)
* REST APIs
* Multipart file handling
* HTTP client for ML communication

## 🤖 ML Service

* Python
* FastAPI
* Image classification model (CNN / rule-based prototype)

## 🌐 External API

* RapidAPI (Product Recommendation APIs)

---

# 📂 Project Structure

```text id="structure1"
SkinSense/
├── skinsense-frontend/   # React frontend
├── skinsense-backend/    # Spring Boot backend
├── skinsense-ml/         # FastAPI ML service
└── README.md
```

---

# ⚙️ Setup Guide

## 🔹 1. Clone Repository

```bash id="setup1"
git clone <your-repo-link>
cd SkinSense
```

---

## 🔹 2. Backend Configuration (Spring Boot)

Create:

```text id="backendprops"
skinsense-backend/src/main/resources/application.properties
```

Add:

```properties id="backendprops2"
server.port=8080

# ML Service URL (IMPORTANT)
ml.service.url=http://localhost:8000/predict

# RapidAPI Key
rapidapi.key=YOUR_RAPIDAPI_KEY
```

---

## 🔹 3. Frontend Configuration (Vite)

Create:

```text id="frontendenv"
skinsense-frontend/.env
```

Add:

```env id="frontendenv2"
VITE_BACKEND_URL=http://localhost:8080
```

---

## 🔹 4. Start ML Service FIRST

```bash id="mlstart"
cd skinsense-ml
pip install -r requirements.txt
uvicorn main:app --reload
```

Runs at:

```text id="mlurl"
http://localhost:8000
```

---

## 🔹 5. Start Backend (Spring Boot)

```bash id="backendstart"
cd skinsense-backend
mvn spring-boot:run
```

Runs at:

```text id="backendurl"
http://localhost:8080
```

---

## 🔹 6. Start Frontend

```bash id="frontendstart"
cd skinsense-frontend
npm install
npm run dev
```

Runs at:

```text id="frontendurl"
http://localhost:5173
```

---

# 📡 API ENDPOINT

## 🔸 POST `/api/skin/analyze`

### Request

* Type: `multipart/form-data`
* Key: `file`

---

### Response Example

```json id="response1"
{
  "skinType": "OILY",
  "concern": "ACNE",
  "tips": [
    "Wash face twice daily",
    "Use oil-free moisturizer"
  ],
  "products": [
    {
      "name": "Gentle Face Wash",
      "price": "₹299",
      "rating": "4.3",
      "image": "image_url",
      "url": "product_link"
    }
  ]
}
```

---

# 🔗 IMPORTANT ARCHITECTURE NOTE

## 🧠 ML Service Communication

* Spring Boot **calls ML service using HTTP**
* It requires the exact URL:

```text id="note1"
http://localhost:8000/predict
```

👉 This is NOT automatic
👉 Port must be explicitly configured
👉 Services are independent processes

---

# 🔑 RAPIDAPI SETUP

## What is RapidAPI?

Used to fetch:

* skincare products
* beauty recommendations
* external product listings

---

## Steps:

1. Go to [https://rapidapi.com/](https://rapidapi.com/)
2. Create account
3. Subscribe to a skincare/product API
4. Copy API key
5. Paste into:

```properties id="rapid1"
rapidapi.key=YOUR_KEY
```

---

## ⚠️ Important Rules

* Never commit API keys to GitHub
* Use environment variables in production
* Invalid key → product section will fail

---

# ⚠️ COMMON ISSUES

### ❌ Request not multipart

→ You are sending JSON instead of FormData

---

### ❌ ML service not responding

→ Ensure FastAPI is running on port 8000

---

### ❌ CORS error

→ Enable in backend:

```java id="cors1"
@CrossOrigin(origins = "*")
```

---

### ❌ Products not loading

→ Check RapidAPI key + subscription

---

### ❌ Camera not working

→ Allow browser permissions

---

# 🚀 FEATURES

* 📸 Live webcam capture
* 🤖 AI-based skin analysis
* 💡 Personalized skincare recommendations
* 🛍️ Product suggestions via external API
* ⚡ Microservice-based architecture

---

# 🔮 FUTURE IMPROVEMENTS

#Frontend
* Home Page Enhancement
* Design SignUp/Login Page 
* Products Cards Enhancement in the Result Section 
* About page Enhancement

# Backend
* User authentication (JWT)
* Add Product Filtering
* Smarter Querying
* Better Ranking of Products
* Save scan history in database
* Deploy backend + ML service (cloud)

# Ml-Service
* Improve ML accuracy (deep learning model)
* Add dashboard analytics


---


# 🎯 STUDENT CHALLENGES

* Add SignUp/Login Page
* Improve UI animations ✨
* Add dark mode 🌙
* Add loading skeletons ⏳
* Improve ML model accuracy 🤖

---

---

## 👨‍💻 Author

**Shreya Pawar**

This project, SkinSense, is independently developed by me as a full-stack + AI learning project.


#

```md id="readmecontrib"
## 🤝 Contributing

We welcome contributions!  
Please check the `CONTRIBUTING.md` file for guidelines.
