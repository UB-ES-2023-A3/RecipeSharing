from django.test import TestCase, Client
from app.models import CustomUser, Recipe
import json


class UserLogicTestCase(TestCase):

    def setUp(self):
        # Crea usuarios y recetas de ejemplo
        self.user = CustomUser.objects.create(
            username="testuser",
            password="testpassword",
            email="testuser@example.com",
            list_favorite_recipes={}
        )
        self.recipe = Recipe.objects.create(
            title="Test Recipe",
            ingredients=["Ingredient 1", "Ingredient 2"],
            instructions="Mix ingredients and bake.",
        )

    def test_add_recipe_to_favorites(self):
        client = Client()

        # Simula la solicitud HTTP para agregar una receta a favoritos
        request_data = {
            "user_id": "testuser",
            "recipe_id": int(self.recipe.id)
        }
        response = client.post(
            '/recipesAddFavorites/',
            json.dumps(request_data),
            content_type='application/json'
        )

        # Verifica que la receta se haya agregado correctamente
        self.assertEqual(
            response.json()['message'],
            'Recipe added to favorites.'
        )

    def test_remove_recipe_from_favorites(self):
        client = Client()

        # Agrega la receta a la lista de favoritos
        self.user.list_favorite_recipes = {
            str(self.recipe.id): self.recipe.toJson()
        }
        self.user.save()

        # Simula la solicitud HTTP para eliminar la receta de favoritos
        request_data = {
            "user_id": "testuser",
            "recipe_id": int(self.recipe.id)
        }
        response = client.post(
            '/recipesAddFavorites/',
            json.dumps(request_data),
            content_type='application/json'
        )

        # Verifica que la receta se haya eliminado correctamente
        self.assertEqual(
            response.json()['message'],
            'Recipe removed from favorites.'
        )

    def test_add_recipe_to_favorites_nonexistent_recipe(self):
        client = Client()

        request_data = {
            "user_id": "testuser",
            "recipe_id": 2
        }
        response = client.post(
            '/recipesAddFavorites/',
            json.dumps(request_data),
            content_type='application/json'
        )

        # Verifica que se maneje correctamente la receta inexistente
        self.assertEqual(
            response.json()['error'],
            'Recipe not found.'
        )

    def test_add_recipe_to_favorites_nonexistent_user(self):
        client = Client()

        request_data = {
            "user_id": "nonexistent_user",
            "recipe_id": int(self.recipe.id)
        }
        response = client.post(
            '/recipesAddFavorites/',
            json.dumps(request_data),
            content_type='application/json'
        )

        # Verifica que se maneje correctamente el usuario inexistente
        self.assertEqual(
            response.json()['error'],
            'User not found.'
        )
