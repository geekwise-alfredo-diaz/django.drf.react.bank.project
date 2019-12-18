from rest_framework import serializers
from .models import Branch, Account, Customer, Product

class Branch_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id', 'name']
        model = Branch

class Account_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id','name']
        model = Account

class Customer_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id','name']
        model = Customer

class Product_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id']
        model = Product