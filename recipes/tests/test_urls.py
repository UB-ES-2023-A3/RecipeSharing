from django.test import TestCase
from django.urls import reverse, resolve
from recipes.views import get_all_recipes, get_recipe_by_id, create_new_recipe

class TestUrls(TestCase):

    def test_list_url_is_resolved(self):
        url = reverse('get_all_recipes')
        self.assertEquals(resolve(url).func, get_all_recipes)
    
    def test_detail_url_is_resolved(self):
        url = reverse('get_recipe_by_id', args=[1])
        self.assertEquals(resolve(url).func, get_recipe_by_id)
    
    def test_create_url_is_resolved(self):
        url = reverse('create_new_recipe')
        self.assertEquals(resolve(url).func, create_new_recipe)

