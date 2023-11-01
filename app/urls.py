from django.urls import path, include
from app.views import HomeView, RegisterView, LoginView, AddRecipeView, ViewRecipeView

app_name = 'app'
urlpatterns = [
    path('', HomeView.as_view(), name='homepage'),
    path('register/', RegisterView.as_view(), name='registerpage'),
    path('login/', LoginView.as_view(), name='loginpage'),
    path('addRecipe/', AddRecipeView.as_view(), name='addRecipe'),

    path('getRecipes/', HomeView.get_recipies, name= 'get_recipies'),
    path('recipe/<int:recipe_id>/', ViewRecipeView.as_view(), name='viewRecipe')
    
    # path('new/', views.create_new_recipe, name='create_new_recipe'),
    # path('recipes/<int:recipe_id>/', views.update_recipe, name='update_recipe'),
    # path('recipes/<int:recipe_id>/', views.delete_recipe, name='delete_recipe')
]

urlpatterns += [
    path('login/', include('django.contrib.auth.urls')),
]
