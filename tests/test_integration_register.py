from django.test import TestCase
from app.logic import registerLogic
from app.models import CustomUser
import json

class RecipeTestCase(TestCase):

    def test_register_user_success(self):

        request_data = {
                "username": "ValidUsername",
                "email": "newuser@example.com",
                "password": "Password1!",
            }

        response = self.client.post('/register/',
                                    json.dumps(request_data),
                                    content_type='application/json')

        self.assertEqual(response.json()['message'], 'Registration successful.')

    def test_register_user_invalid_password(self):

        request_data = {
                "username": "ValidUsername",
                "email": "newuser@example.com",
                "password": "Password1",
            }

        response = self.client.post('/register/',
                                    json.dumps(request_data),
                                    content_type='application/json')

        self.assertEqual(response.json()['error'], 'Password not valid')

    def test_register_user_invalid_email(self):

        request_data = {
                "username": "ValidUsername",
                "email": "newuserexample.com",
                "password": "Password1!",
            }

        response = self.client.post('/register/',
                                    json.dumps(request_data),
                                    content_type='application/json')

        self.assertEqual(response.json()['error'], 'Email not valid')
    
    def test_register_user_exists_email(self):

        CustomUser.objects.create(
            username="ExistingUser",
            email="existinguser@example.com",
            password="Password1!"
        )

        request_data = {
                "username": "ValidUsername",
                "email": "existinguser@example.com",
                "password": "Password1!",
            }

        response = self.client.post('/register/',
                                    json.dumps(request_data),
                                    content_type='application/json')

        self.assertEqual(response.json()['error'], 
                        'Email already exists.')

    def test_register_user_exists_username(self):

        CustomUser.objects.create(
            username="ExistingUser",
            email="existinguser@example.com",
            password="Password1!"
        )

        request_data = {
                "username": "ExistingUser",
                "email": "newuser1@gmail.com",
                "password": "Password1!",
            }

        response = self.client.post('/register/',
                                    json.dumps(request_data),
                                    content_type='application/json')

        self.assertEqual(response.json()['error'], 
                        'Username already exists.')

  

