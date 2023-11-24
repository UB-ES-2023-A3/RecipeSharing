from django.test import TestCase
from app.models import Recipe
from app.logic.recipeLogic import get_list_recipes_by_query


class RecipeQueryTestCase(TestCase):

    def setUp(self):
        # Configurar datos de prueba, si es necesario
        Recipe.objects.create(title="Recipe 1",
                              ingredients="Ingredient 1",
                              allergens="Allergen 1",
                              recipe_type="Type 1",
                              servings="2", kcal="300",
                              preparation_time="30",
                              rating_average=4.8)
        Recipe.objects.create(title="Recipe 2",
                              ingredients="Ingredient 2",
                              allergens="Allergen 2",
                              recipe_type="Type 2",
                              servings="4",
                              kcal="500",
                              preparation_time="45",
                              rating_average=1.3)

    # Ingredients Test
    def test_correct_ingredients_filter(self):
        correct_response = get_list_recipes_by_query(
            'ingredients=Ingredient 1')
        print(correct_response)
        self.assertEqual(len(correct_response['recipes']), 1)
        self.assertEqual(correct_response['recipes'][0]['title'], 'Recipe 1')

    def test_wrong_ingredients_filter(self):
        wrong_response = get_list_recipes_by_query('ingredients=Ingredient 2')
        self.assertEqual(len(wrong_response['recipes']), 1)
        self.assertNotEqual(wrong_response['recipes'][0]['title'], 'Recipe 1')

    # Allergens Test
    def test_correct_allergens_filter(self):
        correct_response = get_list_recipes_by_query('allergens=Allergen 1')
        self.assertEqual(len(correct_response['recipes']), 1)
        self.assertEqual(correct_response['recipes'][0]['title'], 'Recipe 1')

    def test_wrong_allergens_filter(self):
        wrong_response = get_list_recipes_by_query('allergens=Allergen 1')
        self.assertEqual(len(wrong_response['recipes']), 1)
        self.assertNotEqual(wrong_response['recipes'][0]['title'], 'Recipe 2')

    # Recipe type Test
    def test_correct_recipe_type_filter(self):
        correct_response = get_list_recipes_by_query('recipe_type=Type 2')
        self.assertEqual(len(correct_response['recipes']), 1)
        self.assertEqual(correct_response['recipes'][0]['title'], 'Recipe 2')

    def test_wrong_recipe_type_filter(self):
        wrong_response = get_list_recipes_by_query('recipe_type=Type 2')
        self.assertEqual(len(wrong_response['recipes']), 1)
        self.assertNotEqual(wrong_response['recipes'][0]['title'], 'Recipe 1')

    # Servings Test
    def test_correct_servings_filter(self):
        correct_response = get_list_recipes_by_query('servings=2')
        self.assertEqual(len(correct_response['recipes']), 1)
        self.assertEqual(correct_response['recipes'][0]['title'], 'Recipe 1')

    def test_wrong_servings_filter(self):
        wrong_response = get_list_recipes_by_query('servings=0')
        self.assertEqual(len(wrong_response['recipes']), 0)

    # Kcal Test
    def test_correct_kcal_filter(self):
        correct_response = get_list_recipes_by_query('kcal=500')
        self.assertEqual(len(correct_response['recipes']), 1)
        self.assertEqual(correct_response['recipes'][0]['title'], 'Recipe 2')

    def test_wrong_kcal_filter(self):
        wrong_response = get_list_recipes_by_query('kcal=200')
        self.assertEqual(len(wrong_response['recipes']), 0)

    # Preparation Time Test
    def test_correct_preparation_time_filter(self):
        correct_response = get_list_recipes_by_query('preparation_time=30')
        self.assertEqual(len(correct_response['recipes']), 1)
        self.assertEqual(correct_response['recipes'][0]['title'], 'Recipe 1')

    def test_wrong_preparation_time_filter(self):
        wrong_response = get_list_recipes_by_query('preparation_time=45')
        self.assertEqual(len(wrong_response['recipes']), 1)
        self.assertNotEqual(wrong_response['recipes'][0]['title'], 'Recipe 1')

    # Test Rating Ascendiente
    def test_asc_rating_filter(self):
        correct_response = get_list_recipes_by_query('order_by=rate+asc')
        self.assertEqual(len(correct_response['recipes']), 2)
        print(correct_response)
        self.assertEqual(correct_response['recipes'][0]['title'], 'Recipe 2')
        self.assertEqual(correct_response['recipes'][1]['title'], 'Recipe 1')

    def test_desc_rating_filter(self):
        correct_response = get_list_recipes_by_query('order_by=rate+desc')
        self.assertEqual(len(correct_response['recipes']), 2)
        print(correct_response)
        self.assertEqual(correct_response['recipes'][0]['title'], 'Recipe 1')
        self.assertEqual(correct_response['recipes'][1]['title'], 'Recipe 2')
