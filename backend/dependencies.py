from typing import Union, Any, Annotated
from datetime import datetime
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from functools import lru_cache

from backend import utils, repository
from jose import jwt
from pydantic import ValidationError
from backend.schemas import TokenPayload, SystemAccount



@lru_cache()
def get_settings():
    return utils.Settings()


reuseable_oauth = OAuth2PasswordBearer(
    tokenUrl="/login",
    scheme_name="JWT"
)


async def get_current_user(settings: Annotated[utils.Settings, Depends(get_settings)], token: str = Depends(reuseable_oauth)) -> SystemAccount:
    try:
        payload = jwt.decode(
            token, settings.jwt_secret_key, algorithms=[settings.algorithm]
        )
        token_data = TokenPayload(**payload)

        if datetime.fromtimestamp(token_data.exp) < datetime.now():
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token expired",
                headers={"WWW-Authenticate": "Bearer"},
            )
    except(jwt.JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    username: str = token_data.sub
    db_account = repository.get_account_by_username(username=username)
    if not db_account:
        raise HTTPException(status_code=400, detail="Account not found")
    else:
        user = {
            'username': db_account.username,
            'password': db_account.password
        }
    # if user does not exist, raise an exception
    # if user exist, return user Schema with password hashed
    return SystemAccount(**user)

