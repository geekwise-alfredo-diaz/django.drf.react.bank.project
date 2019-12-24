from django.urls import path, include
from .veiwsets import Register_Viewset
from knox import views as knox_views

urlpatterns = [
    path('auth', include('knox.urls')),
    path('auth/register', Register_Viewset.as_view()),
]