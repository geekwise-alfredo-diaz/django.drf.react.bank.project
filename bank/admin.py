from django.contrib import admin
from bank_holders.models import Branch, Account, Customer, Product


# Register your models here.
admin.register((
    Branch,
    Account,
    Customer,
    Product,
))