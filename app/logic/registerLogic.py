import re

from django.contrib.auth import login
from django.contrib.auth.models import User


# Register logic
def register_user(username, email, password, request):
    # Username exists
    if User.objects.filter(username=username).exists():
        return {'error': 'Username already exists.'}

    # Email exists
    if User.objects.filter(email=email).exists():
        return {'error': 'Email already exists.'}

    # Check username, email, password
    if username_check(username):
        if email_check(email):
            if password_check(password):
                user = User.objects.create_user(username=username, email=email, password=password)
                login(request, user)
                return {'message': 'Registration successful.'}
            else:
                return {'error': 'Password not valid'}
        else:
            return {'error': 'Email not valid'}
    else:
        return {'error': 'Username not valid'}


# Check username
def username_check(username):
    if 8 <= len(username) <= 16:
        return True
    else:
        return False


# Check email
def email_check(email):
    # Regular expression pattern for validating email addresses
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'

    # Check if the string matches the pattern
    if re.match(pattern, email):
        return True
    else:
        return False


# Check password
def password_check(password):
    # Check for a minimum length of 8 characters
    if len(password) < 8:
        return False

    # Check if there is at least one special character
    if not re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
        return False

    # Check if there is at least one uppercase letter
    if not re.search(r'[A-Z]', password):
        return False

    # Check if there is at least one digit
    if not re.search(r'[0-9]', password):
        return False

    # Check if there is at least one lowercase letter
    if not re.search(r'[a-z]', password):
        return False

    # If it passes all the above checks, the password is valid
    return True
