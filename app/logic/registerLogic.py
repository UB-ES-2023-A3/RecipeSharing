from django.contrib.auth.models import User
from django.contrib.auth import login
import re
from rest_framework.response import Response


def register_user(username, email, password, request):
    if User.objects.filter(username=username).exists():
        return {'error': 'Username already exists.'}

    if User.objects.filter(email=email).exists():
        return {'error': 'Email already exists.'}

    if verifica_username(username):
        if es_correo_valido(email):
            if verifica_contrasena(password):
                user = User.objects.create_user(username=username, email=email, password=password)
                login(request, user)
                return {'message': 'Registration successful.'}
            else:
                return {'error': 'Password not valid'}
        else:
            return {'error': 'Email not valid'}
    else:
        return {'error': 'Username not valid'}

def verifica_contrasena(contrasena):
    # Verifica la longitud mínima de 8 caracteres
    if len(contrasena) < 8:
        return False

    # Verifica si hay al menos un carácter especial
    if not re.search(r'[!@#$%^&*(),.?":{}|<>]', contrasena):
        return False

    # Verifica si hay al menos una mayúscula
    if not re.search(r'[A-Z]', contrasena):
        return False

    # Verifica si hay al menos un número
    if not re.search(r'[0-9]', contrasena):
        return False

    # Verifica si hay al menos una minúscula
    if not re.search(r'[a-z]', contrasena):
        return False

    # Si pasa todas las comprobaciones anteriores, la contraseña es válida
    return True


def verifica_username(cadena):
    if 8 <= len(cadena) <= 16:
        return True
    else:
        return False


def es_correo_valido(correo):
    # Patrón de expresión regular para validar correos electrónicos
    patron = r'^[\w\.-]+@[\w\.-]+\.\w+$'

    # Comprueba si la cadena coincide con el patrón
    if re.match(patron, correo):
        return True
    else:
        return False
