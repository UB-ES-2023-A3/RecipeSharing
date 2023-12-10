import json
from app.models import Recipe
from app.models import CustomUser


# Recipe logic
def recipe_logic(title, ingredients, instructions, prep_time,
                 username_id, servings, recipe_type, allergens,
                 recipe_image, request):
    if recipe_image == "":
        recipe_image = None

    new_recipe = Recipe(title=title,
                        recipe_image=recipe_image,
                        ingredients=ingredients,
                        instructions=instructions,
                        username_id=username_id,
                        preparation_time=prep_time,
                        servings=servings,
                        kcal=calculateCalories(ingredients),
                        recipe_type=recipe_type,
                        allergens=allergens,
                        rating_amount=0,
                        rating_average=0,
                        rating_list={})

    new_recipe.save()

    user = CustomUser.objects.get(username=new_recipe.username_id)
    user.list_own_recipes[new_recipe.id] = new_recipe.toJson()

    user.save()
    return {'message': 'Recipe created.'}


def add_rating_logic(request):
    body = json.loads(request.body.decode('utf-8'))
    user_id = body.get("user_id")
    recipe_id = body.get("recipe_id")
    rating = body.get("rating")

    recipe = Recipe.objects.get(id=recipe_id)

    if recipe is None:
        return {'error': 'Recipe not found.'}
    if user_id in recipe.rating_list:
        previous_rating = recipe.rating_list.pop(user_id)
        recipe.rating_list[user_id] = rating
        recipe.rating_average \
            = (((recipe.rating_average * recipe.rating_amount)
                - previous_rating) + rating) / recipe.rating_amount
        recipe.save()
        return {'message': 'Rating updated.',
                'rating_average': recipe.rating_average,
                'rating_amount': recipe.rating_amount}
    else:
        recipe.rating_list[user_id] = rating
        recipe.rating_amount += 1
        recipe.rating_average \
            = (recipe.rating_average + rating) / recipe.rating_amount
        recipe.save()
        return {'message': 'Rating added.',
                'rating_average': recipe.rating_average,
                'rating_amount': recipe.rating_amount}


def get_all_recipes():
    # Esto obtiene todos los objetos Recipe,
    # ajusta tu consulta según sea necesario
    recipes = Recipe.objects.all()
    recipe_list = [recipe.toJson() for recipe in recipes]
    return {'recipes': recipe_list}


def get_recipes_main(query):
    if query == "rate":
        recipes_rating = Recipe.objects.all().order_by("-rating_average")
        list = [recipe.toJson() for recipe in recipes_rating]
        return list
    else:
        recipes_recent = Recipe.objects.all().order_by("-creation_date")
        return [recipe.toJson() for recipe in recipes_recent]


def get_list_recipes_by_query(query):
    if query is not None:
        # try:
        recipes = Recipe.objects.all()
        # separate the string query by the string "%A3"

        if "%A3" in query:

            filters_order = query.split("%A3")
            order = filters_order[0]
            if order.split("=")[0] != "order_by":
                return {'error': 'Query not valid.'}

            ordering = order.split("=")[1].split("+")[0]

            if ordering in ["rate", "recent"]:
                if ordering == "recent":
                    ordering = "creation_date"
                elif ordering == "rate":
                    ordering = "rating_average"
                # return {'error': ordering}

                if order.split("=")[1].split("+")[1] == "desc":
                    recipes = Recipe.objects.all().order_by("-" + ordering)
                elif order.split("=")[1].split("+")[1] == "asc":
                    recipes = Recipe.objects.all().order_by(ordering)
                else:
                    return {'error': 'Query not valid.'}
            else:
                return {'error': 'Query not valid.'}

            # separate the string query by the string "%A2"
            if "%A2" in filters_order[1]:
                list_filters = filters_order[1].split("%A2")
                # iterate the list of filters and create a dictionary with the
                # filters, setting the index as the
                # value before the character "=" and the value after the
                # character "=" as a list of values separated
                # by the character "+"
                filters = {}

                for filter in list_filters:
                    if "+" in filter:
                        filters[filter.split("=")[0]] \
                            = filter.split("=")[1].split("+")
                    else:
                        filters[filter.split("=")[0]] \
                            = filter.split("=")[1]

                for filter in filters:
                    if filter not in ["ingredients",
                                      "allergens",
                                      "recipe_type",
                                      "servings",
                                      "kcal",
                                      "preparation_time",
                                      "title"]:
                        return {'error': 'Query not valid.'}
                    if filter not in ["ingredients",
                                      "allergens",
                                      "recipe_type",
                                      "servings",
                                      "kcal",
                                      "preparation_time",
                                      "title"]:
                        return {'error': 'Query not valid.'}
                    if filter == "ingredients":
                        if isinstance(filters[filter], list):
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                recipes = recipes.filter(
                                    ingredients__contains=f)
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.filter(
                                ingredients__contains=filters[filter])
                    elif filter == "allergens":
                        if isinstance(filters[filter], list):
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                recipes = recipes.exclude(
                                    allergens__contains=f)
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.exclude(allergens__contains=f)
                    elif filter == "recipe_type":
                        if isinstance(filters[filter], list):
                            final = None
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                if final is None:
                                    final = recipes.filter(
                                        recipe_type__contains=f)
                                else:
                                    final = final | recipes.filter(
                                        recipe_type__contains=f)
                            recipes = final
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.filter(recipe_type__contains=f)
                    elif filter == "servings":
                        if isinstance(filters[filter], list):
                            final = None
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                if final is None:
                                    final = recipes.filter(
                                        servings__contains=f)
                                else:
                                    final = final | recipes.filter(
                                        servings__contains=f)
                            recipes = final
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.filter(servings__contains=f)
                    elif filter == "kcal":
                        if isinstance(filters[filter], list):
                            final = None
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                if final is None:
                                    final = recipes.filter(kcal__contains=f)
                                else:
                                    final = final | recipes.filter(
                                        kcal__contains=f)
                            recipes = final
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.filter(kcal__contains=f)
                    elif filter == "preparation_time":
                        if isinstance(filters[filter], list):
                            final = None
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                if final is None:
                                    final = recipes.filter(
                                        preparation_time__contains=f)
                                else:
                                    final = final | recipes.filter(
                                        preparation_time__contains=f)
                            recipes = final
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.filter(
                                preparation_time__contains=f)
                    elif filter == "title":
                        if isinstance(filters[filter], list):
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                recipes = recipes.filter(title__contains=f)
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.filter(title__contains=f)
            else:
                filters = {}

                if "+" in filters_order[1]:
                    filters[filters_order[1].split("=")[0]] \
                        = filters_order[1].split("=")[1].split("+")
                else:
                    filters[filters_order[1].split("=")[0]] \
                        = filters_order[1].split("=")[1]

                filter = filters_order[1].split("=")[0]

                if filter not in ["ingredients",
                                  "allergens",
                                  "recipe_type",
                                  "servings",
                                  "kcal",
                                  "preparation_time",
                                  "title"]:
                    return {'error': 'Query not valid.'}
                if filter not in ["ingredients",
                                  "allergens",
                                  "recipe_type",
                                  "servings",
                                  "kcal",
                                  "preparation_time",
                                  "title"]:
                    return {'error': 'Query not valid.'}
                if filter == "ingredients":
                    if isinstance(filters[filter], list):
                        for f in filters[filter]:
                            f.replace("%20", " ")
                            recipes = recipes.filter(ingredients__contains=f)
                    else:
                        f = filters[filter].replace("%20", " ")
                        recipes = recipes.filter(
                            ingredients__contains=filters[filter])
                elif filter == "allergens":
                    if isinstance(filters[filter], list):
                        for f in filters[filter]:
                            f.replace("%20", " ")
                            recipes = recipes.exclude(allergens__contains=f)
                    else:
                        f = filters[filter].replace("%20", " ")
                        recipes = recipes.exclude(allergens__contains=f)
                elif filter == "recipe_type":
                    if isinstance(filters[filter], list):
                        final = None
                        for f in filters[filter]:
                            f.replace("%20", " ")
                            if final is None:
                                final = recipes.filter(recipe_type__contains=f)
                            else:
                                final = final | recipes.filter(
                                    recipe_type__contains=f)
                        recipes = final
                    else:
                        f = filters[filter].replace("%20", " ")
                        recipes = recipes.filter(recipe_type__contains=f)
                elif filter == "servings":
                    if isinstance(filters[filter], list):
                        final = None
                        for f in filters[filter]:
                            f.replace("%20", " ")
                            if final is None:
                                final = recipes.filter(servings__contains=f)
                            else:
                                final = final | recipes.filter(
                                    servings__contains=f)
                        recipes = final
                    else:
                        f = filters[filter].replace("%20", " ")
                        recipes = recipes.filter(servings__contains=f)
                elif filter == "kcal":
                    if isinstance(filters[filter], list):
                        final = None
                        for f in filters[filter]:
                            f.replace("%20", " ")
                            if final is None:
                                final = recipes.filter(kcal__contains=f)
                            else:
                                final = final | recipes.filter(
                                    kcal__contains=f)
                        recipes = final
                    else:
                        f = filters[filter].replace("%20", " ")
                        recipes = recipes.filter(kcal__contains=f)
                elif filter == "preparation_time":
                    if isinstance(filters[filter], list):
                        final = None
                        for f in filters[filter]:
                            f.replace("%20", " ")
                            if final is None:
                                final = recipes.filter(
                                    preparation_time__contains=f)
                            else:
                                final = final | recipes.filter(
                                    preparation_time__contains=f)
                        recipes = final
                    else:
                        f = filters[filter].replace("%20", " ")
                        recipes = recipes.filter(preparation_time__contains=f)
                elif filter == "title":
                    if isinstance(filters[filter], list):
                        for f in filters[filter]:
                            f.replace("%20", " ")
                            recipes = recipes.filter(title__contains=f)
                    else:
                        f = filters[filter].replace("%20", " ")
                        recipes = recipes.filter(title__contains=f)
        else:
            if "order_by" in query:
                order = query
                ordering = order.split("=")[1].split("+")[0]

                if ordering in ["rate", "recent"]:
                    if ordering == "recent":
                        ordering = "creation_date"
                    elif ordering == "rate":
                        ordering = "rating_average"
                    # return {'error': ordering}

                    if order.split("=")[1].split("+")[1] == "desc":
                        recipes = recipes.order_by("-" + ordering)
                    elif order.split("=")[1].split("+")[1] == "asc":
                        recipes = recipes.order_by(ordering)
                    else:
                        return {'error': 'Query not valid.'}
                else:
                    return {'error': 'Query not valid.'}

            elif ("ingredients" in query or
                  "allergens" in query or
                  "recipe_type" in query or
                  "servings" in query or
                  "kcal" in query or
                  "preparation_time" in query or
                  "title" in query):

                if "%A2" not in query:
                    filters = {}

                    if "+" in query:
                        filters[query.split("=")[0]] \
                            = query.split("=")[1].split("+")
                    else:
                        filters[query.split("=")[0]] \
                            = query.split("=")[1]

                    filter = query.split("=")[0]

                    if filter not in ["ingredients",
                                      "allergens",
                                      "recipe_type",
                                      "servings",
                                      "kcal",
                                      "preparation_time",
                                      "title"]:
                        return {'error': 'Query not valid.'}
                    if filter == "ingredients":
                        if isinstance(filters[filter], list):
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                recipes = recipes.filter(
                                    ingredients__contains=f)
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.filter(
                                ingredients__contains=filters[filter])
                    elif filter == "allergens":
                        if isinstance(filters[filter], list):
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                recipes = recipes.exclude(
                                    allergens__contains=f)
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.exclude(allergens__contains=f)
                    elif filter == "recipe_type":
                        if isinstance(filters[filter], list):
                            final = None
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                if final is None:
                                    final = recipes.filter(
                                        recipe_type__contains=f)
                                else:
                                    final = final | recipes.filter(
                                        recipe_type__contains=f)
                            recipes = final
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.filter(recipe_type__contains=f)
                    elif filter == "servings":
                        if isinstance(filters[filter], list):
                            final = None
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                if final is None:
                                    final = recipes.filter(
                                        servings__contains=f)
                                else:
                                    final = final | recipes.filter(
                                        servings__contains=f)
                            recipes = final
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.filter(servings__contains=f)
                    elif filter == "kcal":
                        if isinstance(filters[filter], list):
                            final = None
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                if final is None:
                                    final = recipes.filter(kcal__contains=f)
                                else:
                                    final = final | recipes.filter(
                                        kcal__contains=f)
                            recipes = final
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.filter(kcal__contains=f)
                    elif filter == "preparation_time":
                        if isinstance(filters[filter], list):
                            final = None
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                if final is None:
                                    final = recipes.filter(
                                        preparation_time__contains=f)
                                else:
                                    final = final | recipes.filter(
                                        preparation_time__contains=f)
                            recipes = final
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.filter(
                                preparation_time__contains=f)
                    elif filter == "title":
                        if isinstance(filters[filter], list):
                            for f in filters[filter]:
                                f.replace("%20", " ")
                                recipes = recipes.filter(title__contains=f)
                        else:
                            f = filters[filter].replace("%20", " ")
                            recipes = recipes.filter(title__contains=f)
                    return {'recipes': [recipe.toJson() for recipe in recipes]}

                else:

                    list_filters = query.split("%A2")
                    # iterate the list of filters and create a dictionary
                    # with the filters, setting the index as the
                    # value before the character "=" and the value after
                    # the character "=" as a list of values
                    # separated by the character "+"
                    filters = {}

                    for filter in list_filters:
                        if "+" in filter:
                            filters[filter.split("=")[0]] \
                                = filter.split("=")[1].split("+")
                        else:
                            filters[filter.split("=")[0]] \
                                = filter.split("=")[1]

                    for filter in filters:
                        if filter not in ["ingredients",
                                          "allergens",
                                          "recipe_type",
                                          "servings",
                                          "kcal",
                                          "preparation_time",
                                          "title"]:
                            return {'error': 'Query not valid.'}
                        if filter == "ingredients":
                            if isinstance(filters[filter], list):
                                for f in filters[filter]:
                                    f.replace("%20", " ")
                                    recipes = recipes.filter(
                                        ingredients__contains=f)
                            else:
                                f = filters[filter].replace("%20", " ")
                                recipes = recipes.filter(
                                    ingredients__contains=filters[filter])
                        elif filter == "allergens":
                            if isinstance(filters[filter], list):
                                for f in filters[filter]:
                                    f.replace("%20", " ")
                                    recipes = recipes.exclude(
                                        allergens__contains=f)
                            else:
                                f = filters[filter].replace("%20", " ")
                                recipes = recipes.exclude(
                                    allergens__contains=f)
                        elif filter == "recipe_type":
                            if isinstance(filters[filter], list):
                                final = None
                                for f in filters[filter]:
                                    f.replace("%20", " ")
                                    if final is None:
                                        final = recipes.filter(
                                            recipe_type__contains=f)
                                    else:
                                        final = final | recipes.filter(
                                            recipe_type__contains=f)
                                recipes = final
                            else:
                                f = filters[filter].replace("%20", " ")
                                recipes = recipes.filter(
                                    recipe_type__contains=f)
                        elif filter == "servings":
                            if isinstance(filters[filter], list):
                                final = None
                                for f in filters[filter]:
                                    f.replace("%20", " ")
                                    if final is None:
                                        final = recipes.filter(
                                            servings__contains=f)
                                    else:
                                        final = final | recipes.filter(
                                            servings__contains=f)
                                recipes = final
                            else:
                                f = filters[filter].replace("%20", " ")
                                recipes = recipes.filter(servings__contains=f)
                        elif filter == "kcal":
                            if isinstance(filters[filter], list):
                                final = None
                                for f in filters[filter]:
                                    f.replace("%20", " ")
                                    if final is None:
                                        final = recipes.filter(
                                            kcal__contains=f)
                                    else:
                                        final = final | recipes.filter(
                                            kcal__contains=f)
                                recipes = final
                            else:
                                f = filters[filter].replace("%20", " ")
                                recipes = recipes.filter(kcal__contains=f)
                        elif filter == "preparation_time":
                            if isinstance(filters[filter], list):
                                final = None
                                for f in filters[filter]:
                                    f.replace("%20", " ")
                                    if final is None:
                                        final = recipes.filter(
                                            preparation_time__contains=f)
                                    else:
                                        final = final | recipes.filter(
                                            preparation_time__contains=f)
                                recipes = final
                            else:
                                f = filters[filter].replace("%20", " ")
                                recipes = recipes.filter(
                                    preparation_time__contains=f)
                        elif filter == "title":
                            if isinstance(filters[filter], list):
                                for f in filters[filter]:
                                    f.replace("%20", " ")
                                    recipes = recipes.filter(title__contains=f)
                            else:
                                f = filters[filter].replace("%20", " ")
                                recipes = recipes.filter(title__contains=f)
        filtered_recipes = []
        for recipe in recipes:
            filtered_recipes.append(recipe.toJson())
        return {'recipes': filtered_recipes}
    #    except:
    #       return {'error': 'Query not valid.'}


def get_rating_by_id(recipe_id):
    try:
        recipe = Recipe.objects.get(id=recipe_id)
        return {'rating_amount': recipe.rating_amount,
                'rating_average': recipe.rating_average}
        # para convertirlo en un diccionario.
    except Recipe.DoesNotExist:
        return {'error': 'Recipe not found'}


def calculateCalories(ingredients):
    total_calories = 0
    for i in ingredients:
        if CALORIES[i]:
            total_calories += CALORIES[i]
    return total_calories


def get_recipe_by_id(recipe_id):
    try:
        # Supongo que el campo para el ID de la receta se llama 'id'
        recipe = Recipe.objects.get(id=recipe_id)
        return {'recipe': recipe.toJson()}
    except Recipe.DoesNotExist:
        return {'error': 'Recipe not found'}


def add_comment_logic(request):
    body = json.loads(request.body.decode('utf-8'))
    user_id = body.get("user_id")
    recipe_id = body.get("recipe_id")
    comment = body.get("comment")

    recipe = Recipe.objects.get(id=recipe_id)

    if recipe is None:
        return {'error': 'Recipe not found.'}
    if user_id in recipe.comments_list:
        recipe.comments_list[user_id] = comment
        recipe.save()
        return {'message': 'Comment updated.',
                'comments_list': recipe.comments_list,
                'comments_amount': recipe.comments_amount}
    else:
        recipe.comments_list[user_id] = comment
        recipe.comments_amount += 1
        recipe.save()
        return {'message': 'Comment updated.',
                'comments_list': recipe.comments_list,
                'comments_amount': recipe.comments_amount}


CALORIES = {
    "Almond Milk": 13,
    "Almond": 576,
    "Anchovies": 210,
    "Artichokes": 47,
    "Asparagus": 20,
    "Avocado": 354,
    "Apples": 52,
    "Apricot": 43,
    "Arugula": 25,
    "Bacon (Pancetta)": 417,
    "Baguette": 352,
    "Banana": 89,
    "Barley": 352,
    "Basil": 1,  # Placeholder value, as basil usually has minimal calories
    "Beef": 148,
    "Beetroot": 43,
    "Biscuits": 394,
    "Blueberries": 32,
    "Bok Choy": 31,
    "Bread": 247,
    "Brie Cheese": 334,
    "Broccoli": 43,
    "Brown Rice": 365,
    "Butter": 717,
    "Blackberries": 43,
    "Potato": 87,
    "Brussels Sprouts": 43,
    "Buttermilk": 58,  # Placeholder value, as buttermilk calories can vary
    "Cabbage": 25,
    "Cantaloupe": 34,
    "Carrot": 41,
    "Cauliflower": 25,
    "Celery": 16,
    "Cheese": 403,
    "Chicken": 148,
    "Chickpeas": 164,
    "Chives": 1,  # Placeholder value, as chives usually have minimal calories
    "Chocolate": 552,
    "Cilantro": 1,
    "Cinnamon": 1,
    "Coconut": 354,
    "Coffee": 2,
    "Corn": 372,
    "Corn Flakes": 372,
    "Cottage Cheese": 98,
    "Cranberries": 1,
    "Cream": 296,
    "Cucumber": 15,
    "Cayenne Pepper": 1,
    "Cashews": 567,
    "Cheddar Cheese": 403,
    "Cherry": 50,
    "Dates": 282,
    "Dill": 1,  # Placeholder value, as dill usually has minimal calories
    "Dragon Fruit": 1,
    "Eggplant": 25,
    "Eggs": 143,
    "Endive": 17,
    "Edamame": 121,  # Placeholder value, as edamame calories can vary
    "Escarole": 17,
    "Fennel": 31,
    "Feta Cheese": 264,
    "Fish": 1,  # Placeholder value, as fish calories can vary
    "Flour": 1,  # Placeholder value, as flour calories can vary
    "Figs": 74,
    "Garlic": 1,  # Placeholder value, as garlic usually has minimal calories
    "Ginger": 1,  # Placeholder value, as ginger usually has minimal calories
    "Goat Cheese": 357,
    "Grapes": 69,
    "Green Beans": 31,
    "Green Bell Pepper": 31,
    "Green Onions": 31,
    "Ground Beef": 148,
    "Gouda Cheese": 357,
    "Guava": 68,
    "Ham": 165,
    "Honey": 304,
    "Hazelnuts": 629,
    "Heavy Cream": 345,
    "Ice Cream": 207,
    "Icing Sugar": 387,
    "Italian Herbs": 1,
    "Jalapeño": 1,
    "Jackfruit": 95,
    "Kale": 49,
    "Kiwi": 61,
    "Ketchup": 102,
    "Lamb": 105,
    "Lemon": 29,
    "Lettuce": 5,
    "Lime": 30,
    "Lentils": 116,
    "Lobster": 90,
    "Mango": 60,
    "Maple Syrup": 260,
    "Mushrooms": 22,
    "Mint": 1,  # Placeholder value, as mint usually has minimal calories
    "Mozzarella Cheese": 280,
    "Nectarine": 44,
    "Noodles": 138,
    "Nutmeg": 525,
    "Oats": 389,
    "Olive Oil": 884,
    "Onion": 40,
    "Orange": 43,
    "Oregano": 1,  # Placeholder value, as oregano usually has minimal calories
    "Papaya": 43,
    "Parmesan Cheese": 431,
    "Pasta": 131,
    "Peach": 39,
    "Peanut Butter": 587,  # Assuming a standard peanut butter value
    "Peanuts": 567,
    "Pear": 57,
    "Peas": 81,
    "Pecans": 691,
    "Pineapple": 50,
    "Pizza Dough": 296,  # Assuming a standard pizza dough value
    "Plum": 46,
    "Pork": 143,
    "Potatoes": 87,
    "Pumpkin": 26,
    "Quinoa": 120,
    "Paprika": 282,
    "Pinto Beans": 143,  # Assuming a standard pinto beans value
    "Provolone Cheese": 352,
    "Raspberry": 52,
    "Red Bell Pepper": 31,
    "Rice": 206,  # Assuming a standard rice value
    "Rosemary": 1,
    "Ricotta Cheese": 174,
    "Salmon": 206,
    "Salt": 0,  # Assuming a negligible value for salt
    "Sausage": 299,
    "Shrimp": 97,
    "Sour Cream": 195,  # Assuming a standard sour cream value
    "Soy Sauce": 60,
    "Spinach": 43,
    "Strawberries": 32,
    "Sugar": 387,
    "Sweet Potatoes": 86,  # Assuming a standard sweet potatoes value
    "Swiss Cheese": 380,
    "Thyme": 1,  # Placeholder value, as thyme usually has minimal calories
    "Tomatoes": 18,
    "Turkey": 135,
    "Tofu": 144,
    "Tomatillo": 32,  # Assuming a standard tomatillo value
    "Vanilla": 288,  # Assuming a standard vanilla extract value
    "Veal": 105,
    "Vegetable Broth": 4,  # Assuming a standard vegetable broth value
    "Vinegar": 19,
    "Vermicelli": 220,  # Assuming a standard vermicelli value
    "Walnuts": 654,
    "Watermelon": 30,
    "White Bread": 247,
    "White Rice": 365,
    "Wine": 69,
    "Watercress": 11,
    "Yogurt": 61,
    "Yams": 116,  # Assuming a standard yams value
    "Yeast": 38,  # Assuming a standard yeast value
    "Zucchini": 17,
    "Ziti": 131  # Assuming a standard ziti pasta value
}
