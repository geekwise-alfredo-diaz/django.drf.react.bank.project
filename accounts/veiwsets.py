from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import User_Serializer, Register_Serializer, Login_Serializer, Certain_User_Serializer
from django.contrib.auth.models import User

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
    def get(self, request):
        # data = serializers.serialize('json', self.get_queryset())
        # return HttpResponse(data, content_type="application/json")
        return Response ({
            'users': Certain_User_Serializer().data
        })


    # def get(self, request):
    #     return self.request.user