from rest_framework import routers
from .views import TaskViewSet, UserViewSet


router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)
router.register(r'users', UserViewSet)