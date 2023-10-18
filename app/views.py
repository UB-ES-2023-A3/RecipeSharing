from django.views.generic import TemplateView
from app.LoginRegisterLogic import register_view, login_view
from django.views.generic import View
from django.http import HttpResponse
from django.shortcuts import render


class HomeView(TemplateView):
    template_name = "HomePage.html"


class RegisterView(View):
    template_name = "RegisterPage.html"  # Agrega el nombre de tu plantilla de registro

    def get(self, request):
        # Aquí puedes mostrar el formulario de registro vacío
        return render(request, self.template_name)

    def post(self, request):
        response = register_view(request)
        print("RESPONSE: ", response, response.data, response.status_code, response.context_data)
        if response.status_code == 400:
            return render(request, self.template_name)
        else:
            return render(request, "LoginPage.html")


class LoginView(TemplateView):
    template_name = "LoginPage.html"

    def get(self, request):
        # Aquí puedes mostrar el formulario de registro vacío
        return render(request, self.template_name)

    def post(self, request):
        print("REQUEST ", request)
        response = login_view(request)
        return response


class AddRecipeView(TemplateView):
    template_name = "AddRecipePage.html"
