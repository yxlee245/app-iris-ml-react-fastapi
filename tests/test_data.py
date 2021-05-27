import numpy as np
import pandas as pd

import sys
import os
import pytest
import random

# Needed for pytest to resolve imports properly
my_path = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, my_path + "/../")

from src_backend.data import TrainingPipeline, InferencePipeline


@pytest.mark.parametrize("expected_test_size", [0.2, 0.25, 0.3])
def test_training_pipeline(expected_test_size):
    """
    Check that training pipeline class is working properly
    """
    pipeline = TrainingPipeline(test_size=expected_test_size)
    pipeline.ingest()
    X_train, X_test, y_train, y_test = pipeline.output()
    assert isinstance(X_train, pd.DataFrame)
    assert isinstance(X_test, pd.DataFrame)
    assert isinstance(y_train, pd.Series)
    assert isinstance(y_test, pd.Series)
    actual_test_size = len(y_test) / (len(y_train) + len(y_test))
    assert expected_test_size - 1e-2 < actual_test_size < expected_test_size + 1e-2


# Generate random test cases for inference pipeline
INFERENCE_TEST_CASES = []
for _ in range(3):
    test_case = []
    sepal_length_cm = random.random()
    sepal_width_cm = random.random()
    petal_length_cm = random.random()
    petal_width_cm = random.random()
    test_case.append(
        {
            "sepal_length_cm": sepal_length_cm,
            "sepal_width_cm": sepal_width_cm,
            "petal_length_cm": petal_length_cm,
            "petal_width_cm": petal_width_cm,
        }
    )
    test_case.append(
        np.array([[sepal_length_cm, sepal_width_cm, petal_length_cm, petal_width_cm]])
    )
    INFERENCE_TEST_CASES.append(test_case)


@pytest.mark.parametrize("input_dict,expected_output", INFERENCE_TEST_CASES)
def test_inference_pipeline(input_dict, expected_output):
    """
    Check that inference pipeline class is working properly
    """
    pipeline = InferencePipeline()
    pipeline.ingest(input_dict)
    actual_output = pipeline.output()
    assert isinstance(actual_output, np.ndarray)
    assert np.array_equal(actual_output, expected_output)
