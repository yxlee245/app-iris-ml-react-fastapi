import logging
import sys


APP_LOGGER_NAME = "app_iris_ml"


def setup_app_level_logger(
    logger_name: str = APP_LOGGER_NAME, file_name: str = None,
):
    """
    Set up logging to be used throughout whole app
    :params logger_name: str, Name of main logger
    :params file_name: str, filename to save logs to
    :return: logger object to be used at main level
    """
    # Initialize logger
    logger = logging.getLogger(logger_name)
    logger.setLevel(logging.DEBUG)

    # Define format of log messages
    formatter = logging.Formatter(
        "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    )

    # Create stream handler and add to logger
    sh = logging.StreamHandler(sys.stdout)
    sh.setFormatter(formatter)
    logger.handlers.clear()
    logger.addHandler(sh)

    # Create file handler and add to logger if file name is provided
    if file_name:
        fh = logging.FileHandler(file_name)
        fh.setFormatter(formatter)
        logger.addHandler(fh)

    return logger


def get_logger(module_name: str):
    return logging.getLogger(APP_LOGGER_NAME).getChild(module_name)
