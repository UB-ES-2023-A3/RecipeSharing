import json

from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic import View

from app.logic.loginLogic import login_logic
from app.logic.recipeLogic import add_rating_logic, get_list_recipes_by_query, get_recipes_main, recipe_logic, \
    get_rating_by_id
from app.logic.registerLogic import register_user
from app.logic.recipeLogic import get_all_recipes


# Home Page
class HomeView(TemplateView):
    template_name = "HomePage.html"

    def get(self, request):

        return render(request, self.template_name)

    def get_recipes(self):
        recipes = get_recipes_main()
        return JsonResponse(recipes, status=200)

    def post(self, request):
        if request.method == 'POST' and request.json.count == 3:

            response_data = add_rating_logic(request)

            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)

        return JsonResponse({'error': 'Method not allowed.'}, status=405)


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
            recipe_type = body.get("type")
            allergens = body.get("allergens")
            username_id = body.get("username_id")
            response_data = recipe_logic(title, ingredients, instructions, prep_time, username_id, servings,
                                         recipe_type, allergens,
                                         request)

            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)

        return JsonResponse({'error': 'Method not allowed.'}, status=405)


# Query Recipes View
class QueryListRecipesView(TemplateView):
    template_name = "ListRecipesPage.html"

    def get(self, request, query):
        if request.method == 'GET' and query is not None:
            response_data = get_list_recipes_by_query(query)

            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)
        return JsonResponse({'error': 'Method not allowed.'}, status=405)

    # Post Endpoint
    def post(self, request):
        if request.method == 'POST' and request.json.count == 3:

            response_data = add_rating_logic(request)

            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)

        return JsonResponse({'error': 'Method not allowed.'}, status=405)


class PostRecipeRatingView(TemplateView):
    # Post Endpoint
    def post(self, request):
        if request.method == 'POST':

            response_data = add_rating_logic(request)

            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)

        return JsonResponse({'error': 'Method not allowed.'}, status=405)


class GetRecipeRatingView(TemplateView):

    def get(self, request, query):
        if request.method == 'GET':
            response_data = get_rating_by_id(query)
            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)


