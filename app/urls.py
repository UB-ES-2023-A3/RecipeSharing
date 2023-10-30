# Import necessary modules and classes for defining URL patterns
from django.urls import path, include
from app.views import HomeView, RegisterView, LoginView, AddRecipeView

# Define the app name to namespace the URLs
app_name = 'app'

# Define a list of URL patterns for the 'app' application
urlpatterns = [
    # Define a URL pattern for the homepage using the HomeView class
    path('', HomeView.as_view(), name='homepage'),

    # Define a URL pattern for the registration page using the RegisterView class
    path('register/', RegisterView.as_view(), name='registerpage'),

    # Define a URL pattern for the login page using the LoginView class
    path('login/', LoginView.as_view(), name='loginpage'),

    # Define a URL pattern for adding a recipe using the AddRecipeView class
    path('addRecipe/', AddRecipeView.as_view(), name='addRecipe'),

    # Define a URL pattern for getting recipes (note: this is not using class-based views)
    path('getRecipies/', HomeView.get_recipies, name='get_recipies')

    # Additional URL patterns can be defined but are currently commented out
    # path('<int:recipe_id>/', views.get_recipe_by_id, name='get_recipe_by_id'),
    # path('new/', views.create_new_recipe, name='create_new_recipe'),
    # path('recipes/<int:recipe_id>/', views.update_recipe, name='update_recipe'),
    # path('recipes/<int:recipe_id>/', views.delete_recipe, name='delete_recipe')
]

# Include URL patterns for built-in authentication views
urlpatterns += [
    path('login/', include('django.contrib.auth.urls')),
]
