from django.test import TestCase
from app.logic import userLogic
from app.models import CustomUser


class UserLogicTestCase(TestCase):

    def test_get_user_by_username(self):
        # Crear un usuario de prueba
        CustomUser.objects.create(username="TestUser",
                                  email="testuser@example.com",
                                  password="Password123")

        # Caso de éxito: Obtener usuario existente por nombre de usuario
        response_success = userLogic.get_user_by_username("TestUser")
        self.assertEqual(response_success['user']['username'], "TestUser")

        # Caso de error: Obtener usuario no existente por nombre de usuario
        response_error = userLogic.get_user_by_username("NonExistingUser")
        self.assertEqual(response_error['error'], 'User not found.')
