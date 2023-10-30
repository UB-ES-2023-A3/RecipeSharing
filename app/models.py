# Import necessary modules and classes from Django
from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone


# Define a custom User model named Profile, which inherits from the built-in User model
class Profile(User):
    def __str__(self):
        return self.username


# Define a Recipe model
class Recipe(models.Model):
    # Define the 'id' field as an AutoField and set it as the primary key
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)

    # Fields for recipe details
    ingredients = models.TextField()
    instructions = models.TextField()
    preparation_time = models.IntegerField(default=0)
    servings = models.IntegerField(default=0)
    kcal = models.IntegerField(default=0)
    recipe_type = models.TextField()
    allergens = models.TextField()

    # The 'username_id' field is a foreign key, but in this code, it's defined as a TextField. The foreign key to the
    # User model is commented out.
    username_id = models.TextField()

    # The 'creation_date' field is a DateField with a default value of the current time
    creation_date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.title

    # Define a method to convert a Recipe object to a JSON format
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
            'creation_date': self.creation_date.strftime('%Y-%m-%d')
        }
