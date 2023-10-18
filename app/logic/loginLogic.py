from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response


# Create your views here.
def login_view(username, email, password, request):
    if not request.user.is_authenticated:
        if username:
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request=request, user=user)
                return {'message': 'Logged!'}
            else:
                return {'error': 'User not found'}
        elif email:
            user = authenticate(email=email, password=password)
            if user is not None:
                login(request=request, user=user)
                return {'message': 'Logged!'}
            else:
                return {'error': 'User not found'}
        else:
            return {'error': 'Username or Email not found'}

    elif request.user.is_authenticated:
        logout(request)
        return {'error': 'Already logged'}

    else:
        return {'error': 'Unexpected error'}