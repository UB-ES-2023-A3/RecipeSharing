from django.urls import path
from app.views import HomeView, RegisterView, AddRecipeView

app_name = 'app'
urlpatterns = [
    path('', HomeView.as_view(), name='homepage'),
    path('register/', RegisterView.as_view(), name='registerpage'),
    path('addRecipe/', AddRecipeView.as_view(), name='addRecipe'),

]