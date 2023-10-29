from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone


# User model
class Profile(User):
    def __str__(self):
        return self.username


# Recipe model
class Recipe(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)

    # create a foreign key to the user model
    ingredients = models.TextField()
    instructions = models.TextField()
    preparation_time = models.IntegerField(default=0)
    servings = models.IntegerField(default=0)
    kcal = models.IntegerField(default=0)
    recipe_type = models.TextField()
    allergens = models.TextField()

    # username_id = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    username_id = models.TextField()
    creation_date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.title
