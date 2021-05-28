FROM python:3.7.9
WORKDIR /app
COPY ./requirements.txt .
RUN pip install -r requirements.txt
COPY ./src_backend ./src_backend
COPY ./models ./models
COPY ./templates ./templates
COPY ./static ./static
COPY ./main.py .
CMD [ "sh", "-c", "uvicorn main:app --host=0.0.0.0 --port=${PORT:-5000}"]