from typing import Union
import joblib
from functools import lru_cache
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier

from src_backend.util import (
    MODELS_DIR,
    MODEL_LOGREG_FN,
    MODEL_KNN_FN,
    MODEL_RF_FN,
    MODEL_GBM_FN,
)
from src_backend.logger import get_logger


ModelTypes = Union[
    LogisticRegression,
    KNeighborsClassifier,
    RandomForestClassifier,
    GradientBoostingClassifier,
]
local_logger = get_logger(__name__)


@lru_cache(maxsize=128)
def load_model(model_type: str = "logreg") -> ModelTypes:
    """
    Load model from file based on model type provided
    :param model_type: one of the following types: 'logreg', 'knn', 'rf', 'gbm'
    :return: Sklearn Estimator object
    """
    if model_type == "logreg":
        model = joblib.load(MODELS_DIR / MODEL_LOGREG_FN)
    elif model_type == "knn":
        model = joblib.load(MODELS_DIR / MODEL_KNN_FN)
    elif model_type == "rf":
        model = joblib.load(MODELS_DIR / MODEL_RF_FN)
    elif model_type == "gbm":
        model = joblib.load(MODELS_DIR / MODEL_GBM_FN)
    else:
        error_message = f"Incorrect model type given: {model_type}"
        local_logger.error(error_message)
        raise ValueError(error_message)
    return model
