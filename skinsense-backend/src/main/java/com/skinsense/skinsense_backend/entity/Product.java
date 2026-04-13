package com.skinsense.skinsense_backend.entity;

public class Product {
    private  String name;
    private String price;
    private String rating;
    private String image;
    private String url;

    public Product() {}

    public Product(String name, String price, String rating, String image, String url) {
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.image = image;
        this.url = url;
    }

    public String getName() { return name; }
    public String getPrice() { return price; }
    public String getRating() { return rating; }
    public String getImage() { return image; }
    public String getUrl() { return url; }

    public void setName(String name) { this.name = name; }
    public void setPrice(String price) { this.price = price; }
    public void setRating(String rating) { this.rating = rating; }
    public void setImage(String image) { this.image = image; }
    public void setUrl(String url) { this.url = url; }
}




//Here's the complete summary first, then next steps:
//
//SkinSense — Complete Progress Summary
//What's Been Built So Far
//ML Service (Python + FastAPI) — COMPLETED ✅
//Tech stack: Python 3.13, TensorFlow 2.21, FastAPI, Uvicorn
//Folder structure:
//ml-service/
//        ├── app.py                          ← FastAPI server, POST /predict endpoint
//├── services/
//        │   └── predictor.py                ← loads both models, runs inference
//├── utils/
//        │   └── image_preprocessing.py      ← resizes + normalizes image to (1,224,224,3)
//└── model/
//        ├── skin_model.keras            ← trained on Colab (dry/normal/oily)
//    └── acne_model.keras            ← trained on Colab (Acne/Non_Acne)
//Key decisions made:
//
//Two separate models, one combined JSON response
//Both models use softmax + argmax (not sigmoid threshold)
//Class order: skin → dry=0, normal=1, oily=2 | acne → Acne=0, Non_Acne=1
//Confidence scores removed (model was overconfident, always 1.0)
//Run with: uvicorn app:app --reload
//
//API response from /predict:
//json{
//    "skinType": "OILY",
//            "concern": "ACNE",
//            "tips": ["Use foaming cleanser...", "..."],
//    "acneTips": ["Use salicylic acid...", "..."]
//}
//
//Spring Boot Backend — IN PROGRESS 🔄
//Tech stack: Java 17, Spring Boot 3.2.5, Maven
//Decisions made:
//
//Maven build tool
//MVC architecture only — no DTOs, no extra layers
//No database — app is stateless, no login for now
//Products via RapidAPI (Real-Time Amazon Data API) — free tier
//Product.java is a plain POJO — no @Entity, no JPA
//
//Folder structure to build:
//skinsense-backend/
//        └── src/main/java/com/skinsense/
//        ├── controller/
//        │   └── SkinController.java
//    ├── service/
//        │   ├── AnalysisService.java
//    │   └── ProductService.java
//    └── model/
//        └── Product.java
//└── src/main/resources/
//        └── application.properties
//What Spring Boot will do:
//
//Receive image from React → POST /api/analyze
//Forward image to ML FastAPI → POST http://localhost:8000/predict
//Get skinType + concern back
//Call RapidAPI with search query based on skinType + concern
//Return combined response to React
//
//Final JSON to React:
//json{
//    "skinType": "OILY",
//            "concern": "ACNE",
//            "tips": ["..."],
//    "acneTips": ["..."],
//    "products": [
//    {
//        "name": "Minimalist Salicylic Acid Face Wash",
//            "price": "₹299",
//            "rating": "4.3",
//            "image": "https://...",
//            "url": "https://amazon.in/..."
//    }
//    ]
//}
//
//React Frontend — NOT STARTED ⏳
//Planned features:
//
//Live camera capture using getUserMedia
//Upload image to Spring Boot
//Display skin type result
//Display tips
//Display product cards with buy links
//
//
