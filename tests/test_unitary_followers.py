from django.test import TestCase, Client

from app.models import CustomUser
import json


class FollowersTestCase(TestCase):

    def setUp(self):
        # Crear usuarios de prueba
        self.user = CustomUser.objects.create(
            username='user1',
            password='testpass',
            email='email1'
        )
        self.user_to_follow = CustomUser.objects.create(
            username='user2',
            password='testpass',
            email='email2'
        )

    def test_follow_profile_logic(self):
        client = Client()

        request_data = {
            "user_id": "user2"
        }
        client.post(
            'user/user1',
            json.dumps(request_data),
            content_type='application/json'
        )

    def tearDown(self):
        # Limpiar objetos de prueba
        self.user.delete()
        self.user_to_follow.delete()
