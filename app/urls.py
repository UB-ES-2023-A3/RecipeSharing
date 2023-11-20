from django.urls import path, include
from app.views import *

app_name = 'app'
urlpatterns = [
    path('', HomeView.as_view(), name='homepage'),
    path('register/', RegisterView.as_view(), name='registerpage'),
    path('login/', LoginView.as_view(), name='loginpage'),
    path('addRecipe/', AddRecipeView.as_view(), name='addRecipe'),

    # path('getRecipes/', HomeView.get_recipes, name= 'get_recipes'),
    path('recipes/<str:query>/', QueryListRecipesView.as_view(), name='queryListRecipes'),
    path('recipesPostRatings/', PostRecipeRatingView.as_view(), name='postRatingRecipe'),
    path('recipes/getratings/<str:query>/', GetRecipeRatingView.as_view(), name='getRatingRecipe'),

    path('recipe/<str:recipe_id>/', RecipeView.as_view(), name='recipe'),
    #Obtener user por username
    path('user/<str:username>/', GetUserByID.as_view(), name='getUser'),
    # path('new/', views.create_new_recipe, name='create_new_recipe'),
    # path('recipes/<int:recipe_id>/', views.update_recipe, name='update_recipe'),
    # path('recipes/<int:recipe_id>/', views.delete_recipe, name='delete_recipe')
]

urlpatterns += [
    path('login/', include('django.contrib.auth.urls')),
]