#uvicorn app:app --reload
from fastapi import FastAPI, UploadFile, File
from services.predictor import predict_image

app = FastAPI()

@app.get("/")
def home():
    return {"message": "SkinSense ML API running"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        image_bytes = await file.read()
        result = predict_image(image_bytes)
        return result
    except Exception as e:
        return {"error": str(e)}