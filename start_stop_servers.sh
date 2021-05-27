if [ $1 == "start" ]
then
    uvicorn main:app --reload &
    npm run start &
elif [ $1 == "stop" ]
then
    kill %{1,2}
else
    echo "$1 is not a valid argument. Only \"start\" and \"stop\" accepted"
fi