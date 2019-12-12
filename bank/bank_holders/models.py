from django.db import models

class Branch(models.Model):
    branch_name = models.CharField(max_length=30)
    def __str__(self):
        return f"{self.branch_name}"

class Account(models.Model):
    account_name = models.CharField(max_length=30)
    def __str__(self):
        return f"{self.account_name}"

class Customer(models.Model):
    customer_name = models.CharField(max_length=30)
    def __str__(self):
        return f"{self.customer_name}"

class Product(models.Model):
    product_name = models.CharField(max_length=30)
    def __str__(self):
        return f"{self.product_name}"