from django.db import models
from django.contrib.auth.models import User


# Create your models here.
# This class refers to the User model.
class Profile(User):
    # New attributes incoming
    def __str__(self):
        return self.username
