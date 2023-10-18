import json

from django.views.generic import TemplateView
from rest_framework import status

from app.logic.loginLogic import login_view
from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from app.logic.registerLogic import register_user
from rest_framework.response import Response

class HomeView(TemplateView):
    template_name = "HomePage.html"


class RegisterView(View):
    template_name = "RegisterPage.html"  # Agrega el nombre de tu plantilla de registro

    def get(self, request):
        # Aquí puedes mostrar el formulario de registro vacío
        return render(request, self.template_name)

    def post(self, request):
        if request.method == "POST":
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')

            response_data = register_user(username, email, password, request)

            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)

        return JsonResponse({'error': 'Method not allowed.'}, status=405)


class LoginView(TemplateView):
    template_name = "LoginPage.html"

    def get(self, request):
        # Aquí puedes mostrar el formulario de registro vacío
        return render(request, self.template_name)

    def post(self, request):
        if request.method == "POST":
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')

            response_data = login_view(username, email, password, request)

            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)

        return JsonResponse({'error': 'Method not allowed.'}, status=405)


class AddRecipeView(TemplateView):
    template_name = "AddRecipePage.html"
