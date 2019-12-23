from rest_framework import viewsets, permissions
from .serializers import Branch_Serializer, Account_Serializer, Customer_Serializer, Product_Serializer
from .models import Branch, Account, Customer, Product

class Branch_Viewset(viewsets.ModelViewSet):
    queryset = Branch.objects.all()
    serializer_class = Branch_Serializer

class Account_Viewset(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = Account_Serializer

class Customer_Viewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = Customer_Serializer

    def get_queryset(self):
        return self.request.user.customers.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)



class Product_Viewset(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = Product_Serializer