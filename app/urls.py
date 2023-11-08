from django.urls import path, include
from app.views import *

app_name = 'app'
urlpatterns = [
    path('', HomeView.as_view(), name='homepage'),
    path('register/', RegisterView.as_view(), name='registerpage'),
    path('login/', LoginView.as_view(), name='loginpage'),
    path('addRecipe/', AddRecipeView.as_view(), name='addRecipe'),

    # path('getRecipes/', HomeView.get_recipes, name= 'get_recipes'),
    path('recipe/<str:query>/', QueryListRecipesView.as_view(), name='queryListRecipes'),
    path('recipes/postratings/', PostRecipeRatingView.as_view(), name='postRatingRecipe'),
    path('recipes/getratings/<str:query>/', GetRecipeRatingView.as_view(), name='getRatingRecipe')

    # path('new/', views.create_new_recipe, name='create_new_recipe'),
    # path('recipes/<int:recipe_id>/', views.update_recipe, name='update_recipe'),
    # path('recipes/<int:recipe_id>/', views.delete_recipe, name='delete_recipe')
]

urlpatterns += [
    path('login/', include('django.contrib.auth.urls')),
]