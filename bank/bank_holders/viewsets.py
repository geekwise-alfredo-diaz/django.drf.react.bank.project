from rest_framework import viewsets, permissions
from .serializers import Branch_Serializer, Account_Serializer, Member_Serializer, Product_Serializer
from .models import Branch, Account, Member, Product

class Branch_Viewset(viewsets.ModelViewSet):
    queryset = Branch.objects.all()
    serializer_class = Branch_Serializer

class Account_Viewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = Account_Serializer

    def get_queryset(self):
        return self.request.user.holders.all()

    def perform_create(self, serializer):
        serializer.save(holder=self.request.user)

class Member_Viewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = Member_Serializer

    def get_queryset(self):
        return self.request.user.customers.all()

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)

class Product_Viewset(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = Product_Serializer