from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from datetime import datetime

from src_backend.logger import setup_app_level_logger
from src_backend.data import InferencePipeline
from src_backend.model import load_model


# Need to initialize logger first before
# importing other modules that use logging
LOG_FILENAME = f"app_debug_{datetime.now().strftime('%Y%m%d')}.log"
app_logger = setup_app_level_logger(file_name=LOG_FILENAME)

# Instantiate inference pipeline
pipeline = InferencePipeline()

FEATURE_NAMES = [
    "sepal_length_cm",
    "sepal_width_cm",
    "petal_length_cm",
    "petal_width_cm",
]

app = FastAPI()


@app.post("/api/predict")
async def predict(request: Request):
    predict_input = await request.json()
    model_type = predict_input.get("model_type", "")
    app_logger.info(f"Doing prediction using {model_type} model")

    # Load model based on `model_type` value provided
    app_logger.info("Loading model")
    model = load_model(model_type)

    # Pass input data through inference data pipeline
    input_dict = {
        feature_name: value
        for feature_name, value in predict_input.items()
        if feature_name in FEATURE_NAMES
    }
    pipeline.ingest(input_dict)
    input_array = pipeline.output()

    app_logger.info("Computing predicted class and probability")
    predicted_class = model.predict(input_array)[0]
    probs = model.predict_proba(input_array)[0]
    classes = model.classes_

    return {
        "predictedClass": predicted_class,
        "probabilities": {c: p for c, p in zip(classes, probs)}
    }