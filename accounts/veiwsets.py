from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import User_Serializer, Register_Serializer, Login_Serializer

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
        return Response({
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