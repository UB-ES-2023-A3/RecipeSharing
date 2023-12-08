import json
from app.models import CustomUser, Recipe


def get_user_by_username(username):
    try:
        user = CustomUser.objects.get(username=username)
        return {'user': user.toJson()}
    except CustomUser.DoesNotExist:
        return {'error': 'User not found.'}


def add_favorite_logic(request):
    body = json.loads(request.body.decode('utf-8'))
    user_id = body.get("user_id")
    recipe_id = body.get("recipe_id")
    try:
        recipe = Recipe.objects.get(id=recipe_id)
        user = CustomUser.objects.get(username=user_id)

        if recipe is None:
            return {'error': 'Recipe not found.'}
        if user is None:
            return {'error': 'User not found.'}

        list_favorite_recipes = user.list_favorite_recipes

        # Convertir las claves a cadenas
        str_recipe_id = str(recipe.id)

        if str_recipe_id in list_favorite_recipes:
            # Recipe is already in favorites, remove it
            del list_favorite_recipes[str_recipe_id]
            user.save()
            favorite_recipes = [Recipe.objects.get(id=int(recipe_id)).toJson()
                                for recipe_id in list_favorite_recipes.keys()]

            return {'message': 'Recipe removed from favorites.',
                    'list_favorite_recipes': favorite_recipes}
        else:
            # Recipe is not in favorites, add it
            list_favorite_recipes[str_recipe_id] = recipe.toJson()
            user.save()
            favorite_recipes = [Recipe.objects.get(id=int(recipe_id)).toJson()
                                for recipe_id in list_favorite_recipes.keys()]

            return {'message': 'Recipe added to favorites.',
                    'list_favorite_recipes': favorite_recipes}

    except Recipe.DoesNotExist:
        return {'error': 'Recipe not found.'}
    except CustomUser.DoesNotExist:
        return {'error': 'User not found.'}


def follow_profile_logic(request, user):
    body = json.loads(request.body.decode('utf-8'))
    user_name = body.get("user")
    user_to_follow_name = user
    try:
        user = CustomUser.objects.get(username=user_name)
        user_to_follow = CustomUser.objects.get(username=user_to_follow_name)

        if user is None:
            return {'error': 'User not found.'}
        if user_to_follow is None:
            return {'error': 'User to follow not found.'}

        list_follower_users = user.list_follower_users
        list_following_users = user_to_follow.list_following_users

        # Convertir las claves a cadenas
        str_u_to_follow_id = str(user_to_follow.id)
        str_user_id = str(user.id)

        if str_u_to_follow_id in list_follower_users:
            # User is already followed, unfollow it
            del list_follower_users[str_u_to_follow_id]
            del list_following_users[str_user_id]
            user.save()
            user_to_follow.save()

            return {'message': 'User unfollowed.',
                    'list_follower_users': list_follower_users}
        else:
            # User is not followed, follow it
            list_follower_users[str_u_to_follow_id] = user_to_follow.toJson()
            list_following_users[str_user_id] = user.toJson()
            user.save()
            user_to_follow.save()

            return {'message': 'User followed.',
                    'list_follower_users': list_follower_users}

    except CustomUser.DoesNotExist:

        return {'error': 'User not found.'}
