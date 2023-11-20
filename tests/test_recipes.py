import pytest
from django.conf import settings
from django.test import TestCase
from decimal import Decimal
import json

from app.models import Recipe
from app.logic import recipeLogic


class RecipeTestCase(TestCase):
    def test_create_recipe(self):
        # Crea una instancia de Recipe
        recipe = Recipe.objects.create(
                title='Paella',
                ingredients="['Tomatoes','Whole Rice']",
                instructions="instructions",
                username_id="username_id",
                preparation_time=40,
                servings=2,
                kcal=378,
                recipe_type="Spanish",
                allergens="['Rice']",
                rating_amount=1,
                rating_average=5.0,
                rating_list={'jose': 5.0},
                comments_list = {'fav1':'fav'},
                comments_amount = 1
            )
            
        # Recupera la receta de la base de datos
        saved_recipe = Recipe.objects.get(title='Paella')
            
        # Realiza las aserciones para verificar los datos
        self.assertEqual(saved_recipe.title, 'Paella')
        self.assertEqual(saved_recipe.ingredients, "['Tomatoes','Whole Rice']")
        self.assertEqual(saved_recipe.instructions, "instructions")
        self.assertEqual(saved_recipe.username_id, "username_id")
        self.assertEqual(saved_recipe.preparation_time, 40)
        self.assertEqual(saved_recipe.servings, 2)
        self.assertEqual(saved_recipe.kcal, 378)
        self.assertEqual(saved_recipe.recipe_type, "Spanish")
        self.assertEqual(saved_recipe.allergens, "['Rice']")
        self.assertEqual(saved_recipe.rating_amount, 1)
        self.assertEqual(saved_recipe.rating_average, 5.0)
        self.assertEqual(saved_recipe.rating_list, {'jose': 5.0})
        self.assertEqual(saved_recipe.comments_list, {'fav1':'fav'})
        self.assertEqual(saved_recipe.comments_amount, 1)

    
    def test_get_all_recipes(self):
        # Crea algunas recetas de ejemplo en la base de datos
        recipe1 = Recipe.objects.create(title='Recipe 1', ingredients="['Ingredient 1', 'Ingredient 2']", instructions="Instructions 1")
        recipe2 = Recipe.objects.create(title='Recipe 2', ingredients="['Ingredient 3', 'Ingredient 4']", instructions="Instructions 2")

        # Llama a la función get_all_recipes para obtener todas las recetas
        response = recipeLogic.get_all_recipes()

        # Verifica que la respuesta contiene las recetas creadas
        recipes = response['recipes']
        self.assertEqual(len(recipes), 2)  # Verifica que se han recuperado dos recetas

        # Verifica que los datos de las recetas coinciden con los que creaste
        self.assertEqual(recipes[0]['title'], recipe1.title)
        self.assertEqual(recipes[0]['ingredients'], recipe1.ingredients)
        self.assertEqual(recipes[0]['instructions'], recipe1.instructions)

        self.assertEqual(recipes[1]['title'], recipe2.title)
        self.assertEqual(recipes[1]['ingredients'], recipe2.ingredients)
        self.assertEqual(recipes[1]['instructions'], recipe2.instructions)


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