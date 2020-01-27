from django.contrib import admin
from bank.bank_holders.models import Branch, Account, Member, Product


# Register your models here.
admin.site.register((
    Branch,
    Account,
    Member,
    Product,
))