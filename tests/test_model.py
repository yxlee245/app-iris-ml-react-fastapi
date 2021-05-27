import sys
import os
import pytest
import random

# Needed for pytest to resolve imports properly
my_path = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, my_path + "/../")

from src_backend.model import load_model


# Generate random input for model inference
def generate_input():
    return [[random.random() for _ in range(4)]]


@pytest.mark.parametrize(
    "model_type,input_array",
    [
        ["logreg", generate_input()],
        ["knn", generate_input()],
        ["rf", generate_input()],
        ["gbm", generate_input()],
    ],
)
def test_load_model(model_type, input_array):
    """
    Test if function `load_model` is working properly
    """
    model = load_model(model_type)
    predicted_class = model.predict(input_array)[0]
    probs = model.predict_proba(input_array)[0]
    assert predicted_class in ["setosa", "versicolor", "virginica"]
    assert 1.0 - 1e-3 < sum(probs) < 1.0 + 1e-3
    assert min(probs) >= 0.0
    assert max(probs) <= 1.0
