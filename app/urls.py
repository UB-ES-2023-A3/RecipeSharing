from django.urls import path, include
from app.views import *
from django.conf import settings
from django.conf.urls.static import static

app_name = 'app'
urlpatterns = [
    path('', HomeView.as_view(), name='homepage'),

    path('register/', RegisterView.as_view(), name='registerpage'),
    path('login/', LoginView.as_view(), name='loginpage'),
    path('loginRegister/', LoginRegisterView.as_view(), name='loginregisterpage'),

    path('addRecipe/', AddRecipeView.as_view(), name='addRecipe'),

    path('recipe/<int:recipe_id>/', RecipeView.as_view(), name='recipe'),
    path('recipe/filters/allergens/', AllergensFilterView.as_view(), name='allergensFilter'),
    path('recipe/filters/ingredients/', IngredientsFilterView.as_view(), name='ingredientsFilter'),
    path('recipe/filters/types/', TypesFilterView.as_view(), name='typesFilter'),
    path('recipes/<int:recipe_id>/', RecipesView.as_view(), name='recipes'),
    path('recipes/<int:recipe_id>/postRatings/', RecipeView.as_view(), name='postRatingRecipe'),
    path('recipes/postRatings/', RecipeView.as_view(), name='postRatingRecipe'),
    path('recipes/postFavorites/', PostFavoriteRecipe.as_view(), name='addRecipeToFavorite'),
    path('recipes/filters/<str:query>/', QueryListRecipes.as_view(), name='queryListRecipes'),
    path('recipes/<str:query>/getRatings/', GetRatingsByID.as_view(), name='getRatingRecipe'),

    path('profile/<str:username>/', GetUserByUsername.as_view(), name='getUser'),
    path('profiles/<str:username>/', GetUsersByUsername.as_view(), name='getUsers'),
]

urlpatterns += [
    path('login/', include('django.contrib.auth.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)