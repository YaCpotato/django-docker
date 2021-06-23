from django.db import models

# Create your models here.

class Task(models.Model):
    STATUS_DRAFT = "draft"
    STATUS_WIP = "wip"
    STATUS_DONE = "done"
    STATUS_SET = (
            (STATUS_DRAFT, "下書き"),
            (STATUS_WIP, "作業中"),
            (STATUS_DONE, "完了"),
    )
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    discription = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(choices=STATUS_SET, default=STATUS_DRAFT, max_length=8)
    author = models.ForeignKey("auth.User", related_name="tasks", on_delete=models.CASCADE, blank=True, null=True)
