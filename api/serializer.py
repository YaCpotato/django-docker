from rest_framework import serializers

from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'discription', 'created_at', 'updated_at', 'status', 'author')