from django.urls import path, include
from app.views import *

app_name = 'app'
urlpatterns = [
    path('', HomeView.as_view(), name='homepage'),

    path('register/', RegisterView.as_view(), name='registerpage'),
    path('login/', LoginView.as_view(), name='loginpage'),
    path('loginRegister/', LoginRegisterView.as_view(), name='loginregisterpage'),

    path('addRecipe/', AddRecipeView.as_view(), name='addRecipe'),

    path('recipe/<int:recipe_id>/', RecipeView.as_view(), name='recipe'),
    path('recipes/<int:recipe_id>/', RecipesView.as_view(), name='recipes'),
    path('recipes/<int:recipe_id>/postRatings/', RecipeView.as_view(), name='postRatingRecipe'),
    path('recipes/postRatings/', RecipeView.as_view(), name='postRatingRecipe'),
    path('recipes/postFavorites/', PostFavoriteRecipe.as_view(), name='addRecipeToFavorite'),
    path('recipes/filters/<str:query>/', QueryListRecipes.as_view(), name='queryListRecipes'),
    path('recipes/<str:query>/getRatings/', GetRatingsByID.as_view(), name='getRatingRecipe'),

    path('user/<str:username>/', GetUserByUsername.as_view(), name='getUser'),
]

urlpatterns += [
    path('login/', include('django.contrib.auth.urls')),
]
