from django.test import TestCase
import json

from app.models import Recipe
from app.models import CustomUser
from app.logic import recipeLogic


class RecipeTestCase(TestCase):

    def test_add_recipe(self):
        CustomUser.objects.create(
            username="ExistingUser",
            email="existinguser@example.com",
            password="Password1!",
            list_own_recipes={}
        )

        # Datos de la receta
        recipe_data = {
            "name": 'Test Recipe',
            "ingredients": ["Cream"],
            "instructions": "Mix ingredients and bake.",
            "preparationTime": 30,
            "servings": 4,
            "type": "Spanish",
            "allergens": "nuts",
            "username_id": "ExistingUser"
        }

        # Realiza la solicitud para crear la receta
        response = self.client.post('/addRecipe/',
                                    json.dumps(recipe_data),
                                    content_type='application/json')

        # Verifica que la receta se haya creado correctamente
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['message'], 'Recipe created.')

        # Verifica que la receta existe en la base de datos
        recipe_exists = Recipe.objects.filter(title="Test Recipe").exists()
        self.assertTrue(recipe_exists)

    def test_add_rating_logic(self):
        # Crea una receta de ejemplo en la base de datos
        Recipe.objects.create(
            title='Recipe 1',
            id=2,
            ingredients="['Ingredient 1', 'Ingredient 2']",
            instructions="Instructions 1",
            preparation_time=20,
            servings=2,
            kcal=0,
            recipe_type="recipe_type",
            allergens="allergens",
            username_id=2,
            creation_date="2023-11-14",
            rating_average=2.0,
            rating_amount=2.0,
            rating_list={},
            comments_list={"2": 4.0},
            comments_amount=0
        )

        # Crea una solicitud simulada con datos de calificación
        request_data_1 = {
            "user_id": 1,
            "recipe_id": 2,
            "rating": 4.0,
            "review_type": 'rate'
        }
        request_data_2 = {
            "user_id": "2",
            "recipe_id": 2,
            "rating": 4.0,
            "review_type": 'rate'
        }

        response_1 = self.client.post('/recipes/postRatings/',
                                      json.dumps(request_data_1, request_data_1["recipe_id"]),
                                      content_type='application/json')
        response_2 = self.client.post('/recipes/postRatings/',
                                      json.dumps(request_data_2, request_data_2["recipe_id"]),
                                      content_type='application/json')

        # Llama a la función add_rating_logic con la solicitud simulada
        # Envía la solicitud, no la respuesta
        response_from_logic_1 = recipeLogic.add_rating_logic(
            response_1.wsgi_request)
        # Envía la solicitud, no la respuesta
        response_from_logic_2 = recipeLogic.add_rating_logic(
            response_2.wsgi_request)

        # Verifica que la respuesta de la lógica sea la esperada
        self.assertEqual(response_from_logic_1['message'], 'Rating added.')
        self.assertEqual(response_from_logic_2['message'], 'Rating updated.')

    def test_add_comment_logic(self):
        Recipe.objects.create(
            title='Recipe 1',
            ingredients="['Ingredient 1', 'Ingredient 2']",
            instructions="Instructions 1",
            comments_list={},
            comments_amount=0,
            id=1
        )

        CustomUser.objects.create(
            username="username"
        )

        request_data = {
            "user_id": "user123",
            "recipe_id": 1,
            "comment": "Comment",
            "review_type": 'comment',
        }

        response = self.client.post('/recipes/postRatings/',
                                    json.dumps(request_data, request_data["recipe_id"]),
                                    content_type='application/json')
        # Envía la solicitud, no la respuesta
        response_from_logic = recipeLogic.add_comment_logic(
            response.wsgi_request)

        # Verifica que la respuesta de la lógica sea la esperada
        self.assertEqual(response_from_logic['message'], 'Comment updated.')
        self.assertEqual(response_from_logic['comments_list'],
                         {'user123': "Comment"})
        self.assertEqual(response_from_logic['comments_amount'], 1)
