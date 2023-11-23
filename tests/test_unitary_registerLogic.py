import pytest
from django.test import TestCase
from app.logic import registerLogic
from app.models import CustomUser 

class RegisterTestCase(TestCase):

    # Comprueba si el username tiene más de 8 caracteres
    def test_username_check(self):
        username = "Username1"
        username2 = "Prueba"

        respuestaCorrecta = registerLogic.username_check(username)
        respuestaIncorrecta = registerLogic.username_check(username2)
        
        self.assertEqual(respuestaCorrecta, True)
        self.assertEqual(respuestaIncorrecta, False)
    
    # Comprueba la validez de una dirección de correo electrónico
    def test_email_check(self):
        email_valido = "user@example.com"
        email_invalido = "invalid_email"

        respuesta_valida = registerLogic.email_check(email_valido)
        respuesta_invalida = registerLogic.email_check(email_invalido)

        self.assertEqual(respuesta_valida, True)
        self.assertEqual(respuesta_invalida, False)

    # Comprueba la validez de una contraseña
    def test_password_check(self):
        password_valida = "Password1!"
        password_invalida_corta = "Pass1!"
        password_invalida_sin_mayuscula = "password1!"
        password_invalida_sin_minuscula = "PASSWORD1!"
        password_invalida_sin_numero = "Password!"
        password_invalida_sin_caracter_especial = "Password1"

        respuesta_valida = registerLogic.password_check(password_valida)
        respuesta_invalida_corta = registerLogic.password_check(password_invalida_corta)
        respuesta_invalida_sin_mayuscula = registerLogic.password_check(password_invalida_sin_mayuscula)
        respuesta_invalida_sin_minuscula = registerLogic.password_check(password_invalida_sin_minuscula)
        respuesta_invalida_sin_numero = registerLogic.password_check(password_invalida_sin_numero)
        respuesta_invalida_sin_caracter_especial = registerLogic.password_check(password_invalida_sin_caracter_especial)

        self.assertEqual(respuesta_valida, True)
        self.assertEqual(respuesta_invalida_corta, False)
        self.assertEqual(respuesta_invalida_sin_mayuscula, False)
        self.assertEqual(respuesta_invalida_sin_minuscula, False)
        self.assertEqual(respuesta_invalida_sin_numero, False)
        self.assertEqual(respuesta_invalida_sin_caracter_especial, False)


    # Prueba si el usuario se registra correctamente
    def test_register_user_success(self):
        username = "ValidUsername"
        email = "newuser@example.com"
        password = "Password1!"

        response = registerLogic.register_user(username, email, password, None)

        self.assertEqual(response['message'], 'Registration successful.')

    # Prueba si el método detecta que el nombre de usuario ya existe
    def test_register_user_username_exists(self):
        existing_user = CustomUser.objects.create(
            username="ExistingUser",
            email="existinguser@example.com",
            password="Password1!"
        )

        username = "ExistingUser"
        email = "newuser@example.com"
        password = "Password1!"

        response = registerLogic.register_user(username, email, password, None)

        self.assertEqual(response['error'], 'Username already exists.')

    # Prueba si el método detecta que el correo electrónico ya existe
    def test_register_user_email_exists(self):
        existing_user = CustomUser.objects.create(
            username="ExistingUser",
            email="existinguser@example.com",
            password="Password1!"
        )

        username = "NewUser"
        email = "existinguser@example.com"
        password = "Password1!"

        response = registerLogic.register_user(username, email, password, None)

        self.assertEqual(response['error'], 'Email already exists.')

    # Prueba si el método detecta que el nombre de usuario no es válido
    def test_register_user_invalid_username(self):
        username = "Short"
        email = "newuser@example.com"
        password = "Password1!"

        response = registerLogic.register_user(username, email, password, None)

        self.assertEqual(response['error'], 'Username not valid')

    # Prueba si el método detecta que el correo electrónico no es válido
    def test_register_user_invalid_email(self):
        username = "UserInvalidEmail"
        email = "invalidemail"
        password = "Password1!"

        response = registerLogic.register_user(username, email, password, None)

        self.assertEqual(response['error'], 'Email not valid')

    # Prueba si el método detecta que la contraseña no es válida
    def test_register_user_invalid_password(self):
        username = "UserInvalidPass"
        email = "newuser@example.com"
        password = "WeakPass"

        response = registerLogic.register_user(username, email, password, None)

        self.assertEqual(response['error'], 'Password not valid')

