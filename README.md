# Django API
## 起動
```
docker-compose up

Cmd + Tで同タブで別ターミナルを開く
docker exec -it django-docker-nextjs-web-1 bash
python manage.py migrate
python manage.py createsuperuser
```

## Seed
```
docker exec -it django-docker-nextjs-web-1 bash
python manage.py loaddata api/fixtures/user_and_tasks.yaml 
```

## Next.js 起動
```
Cmd + Tで同タブで別ターミナルを開く
nvm use
npm install
```

## admin画面にアクセス
```
http://localhost:8000/admin
```

## djangorestframework疎通チェック
```
curl -X GET http://127.0.0.1:8000/api/tasks/ | jq .
```