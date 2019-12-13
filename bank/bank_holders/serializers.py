from rest_framework import serializers
from .models import Branch, Account, Customer, Product

class Branch_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id', 'branch_name']
        model = Branch

class Account_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id', 'account_name']
        model = Account

class Customer_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id', 'customer_name']
        model = Customer

class Product_Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['id', 'product_name']
        model = Product