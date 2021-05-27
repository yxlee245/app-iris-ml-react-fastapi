from pathlib import Path
import os


# Define directories and and paths
MAIN_DIR = Path(os.path.abspath(__file__)).parent.parent
DATA_DIR = MAIN_DIR / 'data'
MODELS_DIR = MAIN_DIR / 'models'
DATA_FILENAME = 'Iris.csv'

# Create `models` folder
MODELS_DIR.mkdir(exist_ok=True)

# Define dataset name in Kaggle
DATASET_NAME = 'uciml/iris'

# Model Filenames
MODEL_LOGREG_FN = 'clf_logreg.pkl'
MODEL_KNN_FN = 'clf_knn.pkl'
MODEL_RF_FN = 'clf_rf.pkl'
MODEL_GBM_FN = 'clf_gbm.pkl'