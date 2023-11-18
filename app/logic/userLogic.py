from app.models import CustomUser

def get_user_by_id(id):
    try:
        user = CustomUser.objects.get(id=id)
        return {'user': user.toJson()}
    except CustomUser.DoesNotExist:
        return {'error': 'User not found.'}