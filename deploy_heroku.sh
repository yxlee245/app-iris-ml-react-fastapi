set -e

# Login to Heroku container registry
echo "Logging in to Heroku Container Registry..."
echo "$HEROKU_API_KEY" | docker login -u "$HEROKU_ID" \
--password-stdin registry.heroku.com

# Build containers
echo "Building containers..."
docker build -t registry.heroku.com/$APP_NAME/web .

# Push containers into Heroku container registry
echo "Pushing containers into Heroku Container Registry..."
docker push registry.heroku.com/$APP_NAME/web

# Release containers
echo "Releasing containers..."
heroku container:release web --app $APP_NAME

echo "Deployment completed"