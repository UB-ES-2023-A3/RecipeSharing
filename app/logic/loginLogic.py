from django.contrib.auth import authenticate, login, logout


# Login logic
def login_logic(username, email, password, request):
    # User not authenticated
    if not request.user.is_authenticated:
        # Username introduced
        if username:
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request=request, user=user)
                return {'message': 'Logged in.'}
            else:
                return {'error': 'User not found.'}

        # Email introduced
        elif email:
            user = authenticate(email=email, password=password)
            if user is not None:
                login(request=request, user=user)
                return {'message': 'Logged in.'}
            else:
                return {'error': 'User not found.'}

        # Username/Email not introduced
        else:
            return {'error': 'Username or Email not found.'}

    # User not authenticated
    elif request.user.is_authenticated:
        logout(request)
        return {'error': 'Already logged.'}

    # Unexpected error
    else:
        return {'error': 'Unexpected error.'}
