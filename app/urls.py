from django.urls import path, include
from app.views import *

app_name = 'app'
urlpatterns = [
    path('', HomeView.as_view(), name='homepage'),
    path('register/', RegisterView.as_view(), name='registerpage'),
    path('login/', LoginView.as_view(), name='loginpage'),
    path('addRecipe/', AddRecipeView.as_view(), name='addRecipe'),
    path('recipes/<str:query>/', QueryListRecipesView.as_view(), name='queryListRecipes'),
    path('recipes/postratings/', PostRecipeRatingView.as_view(), name='postRatingRecipe'),
    path('recipes/getratings/<str:query>/', GetRecipeRatingView.as_view(), name='getRatingRecipe'),
    path('user/<str:username>/', GetUserView.as_view(), name='getUser'),
]

urlpatterns += [
    path('login/', include('django.contrib.auth.urls')),
]
