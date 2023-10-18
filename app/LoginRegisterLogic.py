from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response


# Create your views here.
def login_view(request):
    if request.method == "POST" and not request.user.is_authenticated:
        data = request.POST
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)

        # Check if user exists
        if user is not None:
            login(request=request, user=user)
            return render(request, "RegisterPage.html", {username: username})
            # return HttpResponse("Pagina de logeo")
        else:
            return render(request, "HomePage.html")

    elif request.user.is_authenticated:
        logout(request)
        return HttpResponse("Sesión cerrada correctamente")

    else:
        return render(request, "LoginPage.html")


def register_view(request):
    if request.method == "POST":
        data = request.POST
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists.'}, status=400)

        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email already exists.'}, status=400)

        user = User.objects.create_user(username=username, email=email, password=password)
        login(request, user)

        return Response('Registration successful.', status=201)
    else:
        return render(request, "RegisterPage.html")


# This class is responsible for checking if the email is valid
class EmailChecker:
    list_valid_emails = ["@gmail.com", "@outlook.com", "@hotmail.com", "@yahoo.com"]

    def check_email(self, user):
        # Check all the email domains valid
        for domain in self.list_valid_emails:
            if user.email.endswith(domain):
                return True
        return False


class PasswordChecker:
    MAX_LENGTH = 16
    MIN_LENGTH = 8
    set_simbols = {"!", "@", "#", "~", "%", "&", "/", "(", ")" "=", "*", "+", "-"}

    def check_password(self, password):
        # Check the length of password
        if not self.MIN_LENGTH <= len(password) <= self.MAX_LENGTH:
            return False

        # Check if exists any number in the password
        if not any(letter.isDigit() for letter in password):
            return False

        has_upper = False
        has_lower = False
        has_symbol = False

        for letter in password:
            if letter.isupper():
                has_upper = True
            else:
                has_lower = True

            if has_upper and has_lower:
                return True

        return False
