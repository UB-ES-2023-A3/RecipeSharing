from app.models import CustomUser


def get_user_by_username(username):
    try:
        user = CustomUser.objects.get(username=username)
        return {'user': user.toJson()}
    except CustomUser.DoesNotExist:
        return {'error': 'User not found.'}
