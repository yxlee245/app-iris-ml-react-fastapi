import numpy as np
import pandas as pd

import kaggle
from typing import Tuple, Dict
from scipy.sparse.construct import rand
from sklearn.model_selection import train_test_split

from src_backend.logger import get_logger
from src_backend.util import DATASET_NAME, DATA_FILENAME, DATA_DIR


local_logger = get_logger(__name__)


class BasePipeline:
    """
    Base class for pipelines, containing ingestion, preprocess and
    output methods to be implemented in child classes
    """

    def ingest(self):
        """
        General method for data ingestion, to be implemented in
        child class
        """
        raise NotImplementedError

    def _preprocess(self):
        """
        General method for data preprocessing, to be implemented in
        child class
        """
        raise NotImplementedError

    def output(self):
        """
        General method for data output, to be implemented in
        child class
        """
        raise NotImplementedError


class TrainingPipeline(BasePipeline):
    def __init__(self, test_size: float = 0.2, random_state: int = 0) -> None:
        local_logger.info("Training pipeline initialized")
        self.test_size = test_size
        self.random_state = random_state

    def ingest(self) -> None:
        # Access and download data via Kaggle API
        kaggle.api.authenticate()
        kaggle.api.dataset_download_file(
            DATASET_NAME, DATA_FILENAME, DATA_DIR, force=True
        )
        self.df = pd.read_csv(DATA_DIR / DATA_FILENAME)

        # Execute preprocessing steps
        self._preprocess()

        # Clean up intermediate variables
        del self.df

    def _preprocess(self) -> None:
        # Clean labels by removing the string 'Iris-' in front
        self.df["Species"] = self.df["Species"].str.replace("Iris-", "")

        # Train-test split
        X = self.df.drop(columns=["Id", "Species"])
        y = self.df["Species"]
        self.X_train, self.X_test, self.y_train, self.y_test = train_test_split(
            X, y, test_size=self.test_size, random_state=self.random_state, stratify=y
        )

    def output(self) -> Tuple[pd.DataFrame, pd.DataFrame, pd.Series, pd.Series]:
        # Output training and test sets
        return self.X_train, self.X_test, self.y_train, self.y_test


class InferencePipeline(BasePipeline):
    def __init__(self) -> None:
        local_logger.info("Inference pipeline initialized")

    def ingest(self, input_dict: Dict[str, float]) -> None:
        """
        Takes in input in the form of a dict, with the following fields:
        sepal_length_cm (float)
        sepal_width_cm (float)
        petal_length_cm (float)
        petal_width_cm (float)
        """
        self.input_dict = input_dict

        self._preprocess()

        # Clean up intermediate variables
        del self.input_dict

    def _preprocess(self) -> None:
        self.input_array = np.array(
            [
                [
                    self.input_dict["sepal_length_cm"],
                    self.input_dict["sepal_width_cm"],
                    self.input_dict["petal_length_cm"],
                    self.input_dict["petal_width_cm"],
                ]
            ]
        )

    def output(self) -> np.ndarray:
        return self.input_array
