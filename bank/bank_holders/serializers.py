from rest_framework import serializers
from .models import Branch, Account, Member, Product

class Branch_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id', 'name']
        model = Branch

class Account_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id', 'name']
        model = Account

class Member_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id','name']
        model = Member

class Product_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id', 'name']
        model = Product