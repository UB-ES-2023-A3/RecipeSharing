from django.urls import path
from . import views

urlpatterns = [
    path("login/", views.login_view),
    path("login/logged/", views.login_action),
    path("signin/", views.signin_view),
    path("signin/signedin/", views.signin_action)
]