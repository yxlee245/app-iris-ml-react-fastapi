# ReactJS + FastAPI App to Predict Iris Species with Machine Learning

__Disclaimer:__ This approach of deploying web applications (having both frontend and backend served in a single Docker container) is usually not recommended, especially for cases where traffic/load is expected to be heavy. Thus, the creator of this repo will not take any responsibility for any adverse results that occur due to using the codes in here.

## Intro
The following is done in this project:
1. The backend REST server is developed using the [FastAPI library](https://fastapi.tiangolo.com/). This server is used to serve machine learning models trained using the [Scikit-Learn library](https://scikit-learn.org/).
2. The frontend client server is developed using [ReactJS](https://reactjs.org/). The production build files from the ReactJS part is then served by the FastAPI backend server.
3. The backend server codes, production build files from ReactJS and persisted machine learning models are transferred into a Dockerfile.
4. A container is built based on the Dockerfile and pushed into Heroku.

## Trying out the app in Heroku
Click the image below to access the deployed app in Heroku.

<a href="https://iris-ml-react-fastapi-yxlee245.herokuapp.com/"><img src="images/chip_128px.png" alt="Iris ML App"/></a>

_(The image above is made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>)_

## Deploying the app
### Prerequisite
The following environment variables have to be defined for the app to function:
- `KAGGLE_USERNAME` - your username for your Kaggle account
- `KAGGLE_KEY` - the secret key to access Kaggle API (Refer [here](https://www.kaggle.com/docs/api) for the steps to generate the API key)
- `HEROKU_ID` - the email you use to log in to Heroku (Only needed if deploying to Heroku)
- `HEROKU_API_KEY` - the API key to your Heroku account (Only needed if deploying to Heroku. Can be found in your account settings)
- `APP_NAME` - the application name in Heroku to deploy the app to (Only needed if deploying to Heroku)

### Starting steps
Clone this repo and navigate to this folder.
```bash
git clone https://github.com/yxlee245/app-iris-ml-react-fastapi
cd app-iris-ml-react-fastapi
```

### Deploying to Heroku
This method requires the use of a bash terminal or some other terminal that can execute shell scripts.
1. Run shell script to deploy to Heroku.
```bash
source deploy_heroku.sh
```
2. Access the app at https://(app-name).herokuapp.com

### Deploying locally
1. Run `docker-compose`.
```bash
docker-compose up --build
```
2. Access the app at http://localhost:8000