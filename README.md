# Django API
## 起動
```
docker-compose up
```

## データベースのマイグレーション
### コンテナ環境
postgreSQL
### ローカル環境
sqlite3
```
python manage.py migrate --database sqlite3
```