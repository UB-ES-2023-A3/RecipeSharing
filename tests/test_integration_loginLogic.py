from django.test import TestCase
import json

from app.models import CustomUser
from app.logic import loginLogic


class LoginTestCase(TestCase):

    def test_login_user_correct(self):

        CustomUser.objects.create(
            username="usernameTest",
            password="passwordTest",
            email="emailTest"
        )
        request_data = {
                "username": "usernameTest",
                "email": "passwordTest",
                "password": "emailTest",
            }

        response = self.client.post('/login/',
                                    json.dumps(request_data),
                                    content_type='application/json')
        
        data = json.loads(response.wsgi_request.body)
        user = data.get('username')
        email = data.get('email')
        password = data.get('password')

        # Llama a la función login_logic con la solicitud simulada
        # Envía la solicitud, no la respuesta
        response_from_logic \
            = loginLogic.login_logic(user,password,email)

        # Verifica que la respuesta de la lógica sea la esperada
        self.assertEqual(response_from_logic['message'], 'Logged in.')

    def test_login_user_incorrect(self):

        CustomUser.objects.create(
            username="usernameTest",
            password="passwordTest",
            email="emailTest"
        )
        request_data = {
                "username": "xxx",
                "email": "passwordTest",
                "password": "emailTest",
            }

        response = self.client.post('/login/',
                                    json.dumps(request_data),
                                    content_type='application/json')
        
        data = json.loads(response.wsgi_request.body)
        user = data.get('username')
        email = data.get('email')
        password = data.get('password')

        # Llama a la función login_logic con la solicitud simulada
        # Envía la solicitud, no la respuesta
        response_from_logic \
            = loginLogic.login_logic(user,password,email)

        # Verifica que la respuesta de la lógica sea la esperada
        self.assertEqual(response_from_logic['error'], 
        'Invalid username, email, or password.')
