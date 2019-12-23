from django.db import models
from django.utils import timezone

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=100, null=False, blank=False)
    is_completed = models.BooleanField(default=False)
    created_on = models.DateTimeField(default=timezone.now(), editable=False)
    updated_on = models.DateTimeField(default=timezone.now())

    def __str__(self):
        return self.title
