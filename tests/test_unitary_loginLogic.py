import pytest
from django.conf import settings
from django.test import TestCase
from decimal import Decimal
import json

from app.models import CustomUser
from app.logic import loginLogic

class LoginTestCase(TestCase):

    def test_check_password_custom(self):

        password1 = "_Contraseña1_"
        password2 = "_Contraseña1_"

        respuesta = loginLogic.check_password_custom(password1, password2)
        
        self.assertEqual(respuesta, True)

    def test_login_logic(self):
        # Crear usuarios de ejemplo
        user = CustomUser.objects.create(
            username="username",
            password="_Contraseña1_",
            email="email"
        )

        # Llamar a la función login_logic con los parámetros adecuados
        response_correct = loginLogic.login_logic("username", "email, ", "_Contraseña1_")
        response_incorrect = loginLogic.login_logic("username", "email", "...")

        # Verificar que la respuesta es la esperada
        self.assertEqual(response_correct['message'], 'Logged in.')
        self.assertEqual(response_incorrect['error'], 'Invalid username, email, or password.')










