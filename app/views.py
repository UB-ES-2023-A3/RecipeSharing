from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = "HomePage.html"

class RegisterView(TemplateView):
    template_name = "RegisterPage.html"

class AddRecipeView(TemplateView):
    template_name = "AddRecipePage.html"