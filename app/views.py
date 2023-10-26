import json

from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic import View

from app.logic.loginLogic import login_logic
from app.logic.recipeLogic import recipe_logic
from app.logic.registerLogic import register_user
from app.logic.recipeLogic import get_all_recipes


# Home Page
class HomeView(TemplateView):
    template_name = "HomePage.html"

    def get(self, request):

        return render(request, self.template_name)
    
    def get_recipies (self):
            recipes = get_all_recipes()
            print(recipes)
            return JsonResponse(recipes, status=200)

# Register Page
class RegisterView(View):
    template_name = "RegisterPage.html"

    # Get Endpoint
    def get(self, request):
        return render(request, self.template_name)

    # Post Endpoint
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


# Login Page
class LoginView(TemplateView):
    template_name = "LoginPage.html"

    # Get Endpoint
    def get(self, request):
        return render(request, self.template_name)

    # Post Endpoint
    def post(self, request):
        if request.method == "POST":
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')

            response_data = login_logic(username, email, password, request)

            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)

        return JsonResponse({'error': 'Method not allowed.'}, status=405)


# Add Recipe Page
class AddRecipeView(TemplateView):
    template_name = "AddRecipePage.html"

    # Get Endpoint
    def get(self, request):
        return render(request, self.template_name)

    # Post Endpoint
    def post(self, request):
        if request.method == 'POST':
            body = json.loads(request.body.decode('utf-8'))
            print(body)
            title = body.get("name")
            ingredients = body.get("ingredients")
            instructions = body.get("instructions")
            prep_time = body.get("preparationTime")
            servings = body.get("servings")
            kcal = body.get("kcal")
            username_id = body.get("username_id")
            recipe_type = body.get("type")
            allergens = body.get("allergens")

            response_data = recipe_logic(title, ingredients, instructions, prep_time, servings, kcal, username_id, recipe_type, allergens,
                                         request)

            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)

        return JsonResponse({'error': 'Method not allowed.'}, status=405)
