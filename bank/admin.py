from django.contrib import admin
from bank.bank_holders.models import Branch, Account, Customer, Product


# Register your models here.
admin.site.register((
    Branch,
    Account,
    Customer,
    Product,
))