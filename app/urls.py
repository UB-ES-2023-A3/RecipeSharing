from django.urls import path, include
from app.views import *

app_name = 'app'
urlpatterns = [
    path('', HomeView.as_view(), name='homepage'),
    path('register/', RegisterView.as_view(), name='registerpage'),
    path('login/', LoginView.as_view(), name='loginpage'),
    path('addRecipe/', AddRecipeView.as_view(), name='addRecipe'),

    #endpoint para obtener las recetas segun rate o date,
    path('recipes/<str:query>/', QueryListRecipes.as_view(), name='queryListRecipes'),
    #endpoint para post de valoracion o comentario de una receta
    path('recipes/postratings/', RecipeView.as_view(), name='postRatingRecipe'),
    #endpoint para añadir a favoritos una receta
    path('recipes/addfavorite/', PostFavoriteRecipe.as_view(), name='addRecipeToFavorite'),

    path('recipes/getratings/<str:query>/', GetRatingsByID.as_view(), name='getRatingRecipe'),
    path('user/<str:username>/', GetUserByUsername.as_view(), name='getUser'),
    path('recipe/<str:recipe_id>/', RecipeView.as_view(), name='recipe'),
    #Obtener user por username
    # path('new/', views.create_new_recipe, name='create_new_recipe'),
    # path('recipes/<int:recipe_id>/', views.update_recipe, name='update_recipe'),
    # path('recipes/<int:recipe_id>/', views.delete_recipe, name='delete_recipe')
]

urlpatterns += [
    path('login/', include('django.contrib.auth.urls')),
]