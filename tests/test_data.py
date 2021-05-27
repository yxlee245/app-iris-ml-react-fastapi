import numpy as np
import pandas as pd

import sys
import os
import pytest
import random

# Needed for pytest to resolve imports properly
my_path = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, my_path + "/../")

from src_backend.data import TrainingPipeline


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
