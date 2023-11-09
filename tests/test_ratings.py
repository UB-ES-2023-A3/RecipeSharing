import pytest
from django.conf import settings
from django.test import TestCase
import json

from app.models import Recipe
from app.logic import recipeLogic


class RecipeTestCase(TestCase):
    def test_add_rating_logic(self):
            # Crea una receta de ejemplo en la base de datos
            recipe = Recipe.objects.create(
                title='Recipe 1',
                ingredients="['Ingredient 1', 'Ingredient 2']",
                instructions="Instructions 1"
            )

            # Crea una solicitud simulada con datos de calificación
            request_data = {
                "user_id": "user123",
                "recipe_id": recipe.id,
                "rating": 4.0
            }
            response = self.client.post('/postratings/', json.dumps(request_data), content_type='application/json')

            # Llama a la función add_rating_logic con la solicitud simulada
            response_from_logic = recipeLogic.add_rating_logic(response.wsgi_request)  # Envía la solicitud, no la respuesta

            # Verifica que la respuesta de la lógica sea la esperada
            self.assertEqual(response_from_logic['message'], 'Rating added.')  # Ajusta el código de estado según tu implementación