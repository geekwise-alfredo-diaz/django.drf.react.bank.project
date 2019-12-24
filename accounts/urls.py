from django.urls import path, include
from .serializers import Register_Serializer
from knox import views as knox_views

urlpatters = [
    path('/auth', include('knox.urls')),
    path('/auth/register', Register_Serializer.as_view()),
]