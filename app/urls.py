from django.urls import path
from app.views import HomeView, RegisterView, LoginView, AddRecipeView

app_name = 'app'
urlpatterns = [
    path('', HomeView.as_view(), name='homepage'),
    path('register/', RegisterView.as_view(), name='registerpage'),
    path('login/', LoginView.as_view(), name='loginpage'),
    path('addRecipe/', AddRecipeView.as_view(), name='addRecipe'),

    path('getRecipies/', HomeView.get_recipies, name= 'get_recipies')

    # path('<int:recipe_id>/', views.get_recipe_by_id, name='get_recipe_by_id'),
    # path('new/', views.create_new_recipe, name='create_new_recipe'),
    # path('recipes/<int:recipe_id>/', views.update_recipe, name='update_recipe'),
    # path('recipes/<int:recipe_id>/', views.delete_recipe, name='delete_recipe')
]
