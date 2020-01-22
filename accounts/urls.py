from django.urls import path, include
from .veiwsets import Register_Viewset, Login_Viewset, User_Viewset, Certain_User_Viewset, Group_Viewset, Password_ViewSet
from knox import views as knox_views

urlpatterns = [
    path('auth/register', Register_Viewset.as_view()),
    path('auth/login', Login_Viewset.as_view()),
    path('auth/user', User_Viewset.as_view()),
    path('auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('auth', include('knox.urls')),
    path('auth/users', Certain_User_Viewset.as_view()),
    path('auth/groups', Group_Viewset.as_view()),
    path('auth/password', Password_ViewSet.as_view())
]