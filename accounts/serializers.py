from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# User Serializer
class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

# Register Serializer
class Register_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['password'],)
            
        return user

# Log in Serializer
class Login_Serializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError('Incorrect Credentials')
