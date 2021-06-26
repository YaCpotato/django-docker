# Django API
## 起動
```
docker-compose up
docker exec -it django-docker_web_1 bash
python manage.py migrate
python manage.py createsuperuser
```

## データベースのマイグレーション
### コンテナ環境
postgreSQL
### ローカル環境
sqlite3
```
python manage.py migrate --database sqlite3
```