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
    # Rating fileds
    rating_average = models.DecimalField(max_digits=5, decimal_places=1)
    rating_amount = models.IntegerField(default=0)
    rating_list = models.JSONField(default={})

    def __str__(self):
        return self.title

    def toJson(self):
        return {
            'id': self.id,
            'title': self.title,
            'ingredients': self.ingredients,
            'instructions': self.instructions,
            'preparation_time': self.preparation_time,
            'servings': self.servings,
            'kcal': self.kcal,
            'recipe_type': self.recipe_type,
            'allergens': self.allergens,
            'username_id': self.username_id,
            'creation_date': self.creation_date.strftime('%Y-%m-%d'),
            'rating_average': self.rating_average,
            'rating_amount': self.rating_amount,
            'rating_list': self.rating_list
        }