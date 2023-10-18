from django.test import TestCase, Client
from django.urls import reverse, resolve
from recipes.models import Recipe
import json

class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.list_url = reverse('get_all_recipes')
        self.detail_url = reverse('get_recipe_by_id', args=[1])
        self.create_url = reverse('create_new_recipe')
        self.recipe1 = Recipe.objects.create(
            title='recipe1',
            ingredients='ingredients1',
            instructions='instructions1',
            preparation_time=1,
            servings=1,
            kcal=1,
            username_id=1
        )
    
    def test_recipe_list_GET(self):
        response = self.client.get(self.list_url)
        self.assertEquals(response.status_code, 200)

    def test_recipe_detail_GET(self):
        response = self.client.get(self.detail_url)
        self.assertEquals(response.status_code, 200)

    def test_recipe_create_POST(self):
        Recipe.objects.create(
            recipe=self.recipe1,
            title='recipe1',
            ingredients='ingredients1',
            instructions='instructions1',
            preparation_time=1,
            servings=1,
            kcal=1,
            username_id=1
        )

        response = self.client.post(self.create_url, {
            'title': 'recipe1',
            'ingredients': 'ingredients1',
            'instructions': 'instructions1',
            'preparation_time': 1,
            'servings': 1,
            'kcal': 1,
            'username_id': 1
        })

        self.assertEquals(response.status_code, 200)
        self.assertEquals(self.recipe1.title, 'recipe1')

