import json

from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic import View

from app.logic.loginLogic import login_logic
from app.logic.recipeLogic import add_comment_logic, add_rating_logic, \
    get_list_recipes_by_query, get_recipe_by_id, get_recipes_main, \
    recipe_logic, get_rating_by_id
from app.logic.registerLogic import register_user
from app.logic.userLogic import add_favorite_logic, follow_profile_logic, \
    get_user_by_username, modify_user_profile


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

            response_data = login_logic(username, email, password)

            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)

        return JsonResponse({'error': 'Method not allowed.'}, status=405)


class LoginRegisterView(TemplateView):
    template_name = "LoginRegisterPage.html"

    def get(self, request):
        return render(request, self.template_name)

    def post(self, request):
        if request.method == "POST":
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')
            lr_type = data.get('type')

            if lr_type == "login":
                response_data = login_logic(username, email, password)

                if 'error' in response_data:
                    return JsonResponse(response_data, status=400)
                else:
                    return JsonResponse(response_data, status=200)
            else:
                response_data = register_user(
                    username,
                    email,
                    password,
                    request)

                if 'error' in response_data:
                    return JsonResponse(response_data, status=400)
                else:
                    return JsonResponse(response_data, status=200)
        return JsonResponse({'error': 'Method not allowed.'}, status=405)


# Add Recipe Page
class AddRecipeView(TemplateView):
    template_name = "AddRecipePage.html"

    # Get Endpoint
    def get(self, request, **kwargs):
        return render(request, self.template_name)

    # Post Endpoint
    def post(self, request):
        if request.method == 'POST':
            body = json.loads(request.body.decode("utf-8"))
            title = body.get("name")
            ingredients = body.get("ingredients")
            instructions = body.get("instructions")
            prep_time = body.get("preparationTime")
            servings = body.get("servings")
            recipe_type = body.get("type")
            allergens = body.get("allergens")
            username_id = body.get("username_id")

            if body.get("recipe_image") is not None:
                recipe_image_base64 = body.get("recipe_image")
            else:
                recipe_image_base64 = None

            response_data = recipe_logic(title, ingredients, instructions,
                                         prep_time, username_id, servings,
                                         recipe_type, allergens,
                                         recipe_image_base64, request)

            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)

        return JsonResponse({'error': 'Method not allowed.'}, status=405)


# Query Recipes View
class QueryListRecipes(TemplateView):
    template_name = "ListRecipesPage.html"

    def get(self, request, query):
        if request.method == 'GET' and query is not None:
            if query == "recent" or query == "rate":
                response_data = get_recipes_main(query)
            else:
                response_data = get_list_recipes_by_query(query)

            if 'error' in response_data:
                return JsonResponse(response_data, safe=False, status=400)
            else:
                return JsonResponse(response_data, safe=False, status=200)
        return JsonResponse({'error': 'Method not allowed.'}, status=405)


class GetRatingsByID(TemplateView):
    def get(self, request, query):
        if request.method == 'GET':
            response_data = get_rating_by_id(query)
            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)


class PostFavoriteRecipe(TemplateView):
    def post(self, request):
        if request.method == 'POST':
            response_data = add_favorite_logic(request)
            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)


class GetUserByUsername(TemplateView):

    def get(self, request, username):
        if request.method == 'GET':
            response_data = get_user_by_username(username)
            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)

    def post(self, request, username):
        if request.method == 'POST':
            body = json.loads(request.body.decode('utf-8'))
            if 'user' in body:
                response_data = follow_profile_logic(request, username)
                if 'error' in response_data:
                    return JsonResponse(response_data, status=400)
                else:
                    return JsonResponse(response_data, status=200)
            else:
                response_data = modify_user_profile(request, username)
                if 'error' in response_data:
                    return JsonResponse(response_data, status=400)
                else:
                    return JsonResponse(response_data, status=200)


class GetUsersByUsername(TemplateView):
    template_name = "ProfilePageRework.html"

    def get(self, request, username):
        return render(request, self.template_name)


class RecipeView(TemplateView):
    def get(self, request, recipe_id):
        if request.method == 'GET':
            response_data = get_recipe_by_id(recipe_id)
            if 'error' in response_data:
                return JsonResponse(response_data, status=400)
            else:
                return JsonResponse(response_data, status=200)

    def post(self, request, recipe_id=None):
        body = json.loads(request.body.decode('utf-8'))
        if request.method == 'POST' and "review_type" in body:
            if body['review_type'] == 'rate':
                response_data = add_rating_logic(request)
            elif body['review_type'] == 'comment':
                response_data = add_comment_logic(request)

        if 'error' in response_data:
            return JsonResponse(response_data, status=400)
        else:
            return JsonResponse(response_data, status=200)


class RecipesView(TemplateView):
    template_name = "RecipePageRework.html"

    def get(self, request, recipe_id):
        return render(request, self.template_name)

    def post(self, request):
        # print "value" in the terminal
        body = json.loads(request.body.decode('utf-8'))
        if request.method == 'POST' and "review_type" in body:
            if body['review_type'] == 'rate':
                response_data = add_rating_logic(request)
            elif body['review_type'] == 'comment':
                response_data = add_comment_logic(request)

        if 'error' in response_data:
            return JsonResponse(response_data, status=400)
        else:
            return JsonResponse(response_data, status=200)


class AllergensFilterView(TemplateView):
    template_name = "AllergensFilterPage.html"

    def get(self, request):
        return render(request, self.template_name)


class IngredientsFilterView(TemplateView):
    template_name = "IngredientsFilterPage.html"

    def get(self, request):
        return render(request, self.template_name)


class TypesFilterView(TemplateView):
    template_name = "TypesFilterPage.html"

    def get(self, request):
        return render(request, self.template_name)
