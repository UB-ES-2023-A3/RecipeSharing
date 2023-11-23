from django.test import TestCase

from app.models import Recipe
from app.logic import recipeLogic


class RecipeTestCase(TestCase):
    # Test para comprobar la creación de una receta

    def test_create_recipe(self):
        # Crea una instancia de Recipe
        Recipe.objects.create(
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
                comments_list={'fav1': 'fav'},
                comments_amount=1
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
        self.assertEqual(saved_recipe.comments_list, {'fav1': 'fav'})
        self.assertEqual(saved_recipe.comments_amount, 1)

    # Test para comprobar que se obtienen todas las recetas de la base de datos
    def test_get_all_recipes(self):
        # Crea algunas recetas de ejemplo en la base de datos
        recipe1 = Recipe.objects.create(title='Recipe 1',
                                        ingredients="['Ingredient 1',"
                                        + " 'Ingredient 2']",
                                        instructions="Instructions 1")
        recipe2 = Recipe.objects.create(title='Recipe 2',
                                        ingredients="['Ingredient 3',"
                                        + " 'Ingredient 4']",
                                        instructions="Instructions 2")

        # Llama a la función get_all_recipes para obtener todas las recetas
        response = recipeLogic.get_all_recipes()

        # Verifica que la respuesta contiene las recetas creadas
        recipes = response['recipes']
        # Verifica que se han recuperado dos recetas
        self.assertEqual(len(recipes), 2)

        # Verifica que los datos de las recetas coinciden con los que creaste
        self.assertEqual(recipes[0]['title'], recipe1.title)
        self.assertEqual(recipes[0]['ingredients'], recipe1.ingredients)
        self.assertEqual(recipes[0]['instructions'], recipe1.instructions)

        self.assertEqual(recipes[1]['title'], recipe2.title)
        self.assertEqual(recipes[1]['ingredients'], recipe2.ingredients)
        self.assertEqual(recipes[1]['instructions'], recipe2.instructions)

    def test_get_recipes_main(self):
        # Crea dos recetas de ejemplo en la base de datos
        recipe1 = Recipe.objects.create(title='Recipe 1',
                                        ingredients="['Ingredient 1',"
                                        + " 'Ingredient 2']",
                                        instructions="Instructions 1",
                                        creation_date="2023-05-09",
                                        rating_average='1.0')
        recipe2 = Recipe.objects.create(title='Recipe 2',
                                        ingredients="['Ingredient 3',"
                                        + " 'Ingredient 4']",
                                        instructions="Instructions 2",
                                        creation_date="2022-04-01",
                                        rating_average='5.0')

        # Llama a la función get_recipes_main para obtener todas las recetas
        response = recipeLogic.get_recipes_main()

        # Verifica que la respuesta contiene las recetas creadas
        recipes_rating = response['recipes_rating']
        # Verifica que se han recuperado dos recetas
        self.assertEqual(len(recipes_rating), 2)

        recipes_recent = response['recipes_recent']
        # Verifica que se han recuperado dos recetas
        self.assertEqual(len(recipes_recent), 2)

        # Verifica que los datos de las recetas coinciden con los que creaste

        # Ordenadas por rating
        self.assertEqual(recipes_rating[0]['title'],
                         recipe2.title)
        self.assertEqual(recipes_rating[0]['ingredients'],
                         recipe2.ingredients)
        self.assertEqual(recipes_rating[0]['instructions'],
                         recipe2.instructions)
        self.assertEqual(recipes_rating[0]['creation_date'],
                         recipe2.creation_date)
        self.assertEqual(recipes_rating[0]['rating_average'],
                         recipe2.rating_average)

        self.assertEqual(recipes_rating[1]['title'],
                         recipe1.title)
        self.assertEqual(recipes_rating[1]['ingredients'],
                         recipe1.ingredients)
        self.assertEqual(recipes_rating[1]['instructions'],
                         recipe1.instructions)
        self.assertEqual(recipes_rating[1]['creation_date'],
                         recipe1.creation_date)
        self.assertEqual(recipes_rating[1]['rating_average'],
                         recipe1.rating_average)

        # Ordenadas por recent
        self.assertEqual(recipes_recent[1]['title'],
                         recipe1.title)
        self.assertEqual(recipes_recent[1]['ingredients'],
                         recipe1.ingredients)
        self.assertEqual(recipes_recent[1]['instructions'],
                         recipe1.instructions)
        self.assertEqual(recipes_recent[1]['creation_date'],
                         recipe1.creation_date)
        self.assertEqual(recipes_recent[1]['rating_average'],
                         recipe1.rating_average)

        self.assertEqual(recipes_recent[0]['title'],
                         recipe2.title)
        self.assertEqual(recipes_recent[0]['ingredients'],
                         recipe2.ingredients)
        self.assertEqual(recipes_recent[0]['instructions'],
                         recipe2.instructions)
        self.assertEqual(recipes_recent[0]['creation_date'],
                         recipe2.creation_date)
        self.assertEqual(recipes_recent[0]['rating_average'],
                         recipe2.rating_average)

    def test_get_rating_by_id(self):
        # Crea dos recetas de ejemplo en la base de datos
        recipe1 = Recipe.objects.create(title='Recipe 1',
                                        id=1,
                                        ingredients="['Ingredient 1',"
                                        + " 'Ingredient 2']",
                                        instructions="Instructions 1",
                                        creation_date="2023-05-09",
                                        rating_average=1.0,
                                        rating_amount=2)
        Recipe.objects.create(title='Recipe 2',
                              id=2,
                              ingredients="['Ingredient 3',"
                              + " 'Ingredient 4']",
                              instructions="Instructions 2",
                              creation_date="2022-04-01",
                              rating_average=5.0,
                              rating_amount=3)

        # Llama a la función get_rating_by_id para obtener todas las recetas
        response = recipeLogic.get_rating_by_id(1)

        rating_amount = response['rating_amount']
        rating_average = response['rating_average']

        self.assertEqual(rating_amount, recipe1.rating_amount)
        self.assertEqual(rating_average, recipe1.rating_average)

    def test_get_recipe_by_id(self):
        # Crea dos recetas de ejemplo en la base de datos
        recipe1 = Recipe.objects.create(title='Recipe 1',
                                        id=1,
                                        ingredients="['Ingredient 1',"
                                        + " 'Ingredient 2']",
                                        instructions="Instructions 1")

        # Llama a la función get_rating_by_id para obtener todas las recetas
        response1 = recipeLogic.get_recipe_by_id(1)
        response2 = recipeLogic.get_recipe_by_id(4)

        recipe = response1['recipe']
        error = response2['error']

        self.assertEqual(recipe['title'], recipe1.title)
        self.assertEqual(recipe['id'], recipe1.id)
        self.assertEqual(recipe['ingredients'], recipe1.ingredients)
        self.assertEqual(recipe['instructions'], recipe1.instructions)

        self.assertEqual(error, 'Recipe not found')
