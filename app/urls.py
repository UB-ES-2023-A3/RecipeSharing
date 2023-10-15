from django.urls import path
from app.views import HomeView, SignInView

app_name = 'app'
urlpatterns = [
    path('', HomeView.as_view(), name='homepage'),
    path('signin/', SignInView.as_view(), name='signin'),
]