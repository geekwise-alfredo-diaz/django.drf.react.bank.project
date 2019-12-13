from rest_framework import serializers
from .models import Branch, Account, Customer, Product

class Branch_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['branch_name']
        model = Branch

class Account_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['account_name']
        model = Account

class Customer_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['customer_name']
        model = Customer

class Product_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['product_name']
        model = Product