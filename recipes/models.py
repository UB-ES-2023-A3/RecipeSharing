from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=100)
    # create a foreign key to the user model
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    description = models.TextField()
    ingredients = models.TextField()
    directions = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
