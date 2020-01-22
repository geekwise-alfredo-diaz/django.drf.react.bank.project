from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView 
from knox.models import AuthToken
from .serializers import User_Serializer, Register_Serializer, Login_Serializer, Certain_User_Serializer, Group_Serializer, Password_Serializer
from django.contrib.auth.models import User, Group
from django.http import JsonResponse, HttpResponse
from django.core import serializers as serl

class Register_Viewset(generics.GenericAPIView):
    serializer_class = Register_Serializer

    # args means it's able to take more arguments 
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            'user': User_Serializer(user, context=self.get_serializer_context()).data,
            'token': AuthToken.objects.create(user)[1]
        })

class Login_Viewset(generics.GenericAPIView):
    serializer_class = Login_Serializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        # permissions = User.objects.get(pk=user.id).get_all_permissions()
        
        return Response({
            # 'permissions': permissions,
            'user': User_Serializer(user, context=self.get_serializer_context()).data,
            'token': AuthToken.objects.create(user)[1]
        })

# User Viewset
class User_Viewset(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = User_Serializer

    # Looks for token and returns associated user
    def get_object(self):
        return self.request.user

class Certain_User_Viewset(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = Certain_User_Serializer

    # Looks for token and returns associated user
    # def get_object(self):
    #     return self.request.user

    def get(self, request):
        queryset = User.objects.filter(groups__name='bank.staff')
        queryset = serl.serialize('json', queryset)
        return HttpResponse(queryset, content_type='application/json')

class Group_Viewset(generics.GenericAPIView):
    serializer_class = Group_Serializer

    def get(self, request):
        queryset = Group.objects.values()
        return Response({"groups": list(queryset)})

# Password View
class Password_ViewSet(APIView):
    def get_object(self, username):
        user = generics.get_object_or_404(User, username=self.request.user.username)
        return user

    def put(self, request):
        serializer = Password_Serializer(data=request.data)

        if serializer.is_valid():
            username = serializer.data['username']
            user = self.get_object(username)
            new_password = serializer.data['password']
            is_same_as_old = user.check_password(new_password)

            if is_same_as_old:
                return Response({"Error": "Password should be different from your last password."},status=status.HTTP_400_BAD_REQUEST)

            user.set_password(new_password)
            user.save()

            res = {key: user.__dict__[key] for key in user.__dict__.keys() & {'username', 'email', 'groups', 'date_joined', 'is_active', 'last_login'}} 

            return Response(res)

        # Returns error if user data not valid
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
