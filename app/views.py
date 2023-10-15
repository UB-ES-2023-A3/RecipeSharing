from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = "HomePage.html"

class SignInView(TemplateView):
    template_name = "SignIn.html"