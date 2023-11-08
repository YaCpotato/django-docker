# Django API
## 起動
```
docker-compose up
docker exec -it django-docker_web_1 bash
python manage.py migrate
python manage.py createsuperuser
```

## admin画面にアクセス
```
http://localhost:8000/admin
```

## djangorestframework疎通チェック
```
curl -X GET http://127.0.0.1:8000/api/tasks/ | jq .
```