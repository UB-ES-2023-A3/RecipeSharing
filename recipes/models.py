from django.db import models
from django.utils import timezone

class Recipe(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    # create a foreign key to the user model
    ingredients = models.JSONField()
    instructions = models.TextField()
    preparation_time = models.IntegerField(default=0)
    servings = models.IntegerField(default=0)
    kcal = models.IntegerField(default=0)
    username_id = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    creation_date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.title
