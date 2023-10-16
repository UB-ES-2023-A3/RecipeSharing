from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_recipes, name='get_all_recipes'),
    path('<int:recipe_id>/', views.get_recipe_by_id, name='get_recipe_by_id'),
    path('new/', views.create_new_recipe, name='create_new_recipe'),
]