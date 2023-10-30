# Import necessary functions from Django's authentication module
from django.contrib.auth import authenticate, login, logout


# Login logic
def login_logic(username, email, password, request):
    # Check if the user is not already authenticated
    if not request.user.is_authenticated:
        # If a username is provided
        if username:
            # Attempt to authenticate the user with the provided username and password
            user = authenticate(username=username, password=password)
            if user is not None:
                # If authentication is successful, log the user in and return a success message
                login(request=request, user=user)
                return {'message': 'Logged in.'}
            else:
                # If the user is not found, return an error message
                return {'error': 'User not found.'}

        # If an email is provided
        elif email:
            # Attempt to authenticate the user with the provided email and password
            user = authenticate(email=email, password=password)
            if user is not None:
                # If authentication is successful, log the user in and return a success message
                login(request=request, user=user)
                return {'message': 'Logged in.'}
            else:
                # If the user is not found, return an error message
                return {'error': 'User not found.'}

        # If neither username nor email is provided, return an error message
        else:
            return {'error': 'Username or Email not found.'}

    # If the user is already authenticated
    elif request.user.is_authenticated:
        # Log the user out and return an error message
        logout(request)
        return {'error': 'Logged out.'}

    # If none of the above conditions are met, return an error message
    else:
        return {'error': 'Unexpected error.'}
