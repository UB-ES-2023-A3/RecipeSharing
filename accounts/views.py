from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

# Create your views here.
def login_view(request):
    return render(request, "login.html")
    # return HttpResponse("Formulario inicio de sesion")

def login_action(request):
    if request.method == "POST" and not request.user.is_authenticated:
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(username=username, password=password)

        # Check if user exists
        if user is not None:
            login(request=request, user=user)

            return HttpResponse("Pagina de logeo")

        else:
            return render(request, "login.html")

    else:
        return HttpResponse("Ya hay un inicio de sesion")
def logout_action(request):
    if request.user.is_authenticated:
        logout(request)
        return HttpResponse("Sesión cerrada correctamente")

    return HttpResponse("No hay iniciada ninguna sesion")

def signin_view(request):
    return render(request, "register.html")

def signin_action(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password"]

        # Check if exists a user
        user = authenticate(username=username, email=email, password=password)

        # If user doesn't exist, creates the user
        if user is None:
            user = User.objects.create_user(username=username, email=email, password=password)
            login(request, user)
            return HttpResponse("Usuario creado correctamente")

        # If the user exist, does anything
        return HttpResponse("El usuario ya existe")

    print("NO ENTRA EN LE IF")

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
    def check_password(self, password):
        if self.MIN_LENGTH <= len(password) <= self.MAX_LENGTH:
            return True

        return False
