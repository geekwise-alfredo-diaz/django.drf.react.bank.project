from django.db import models

class Branch(models.Model):
    name = models.CharField(max_length=30, default="")
    location = models.CharField(max_length=100, default="")

    def __str__(self):
        return f"{self.name}: {self.location}"

class Customer(models.Model):
    name = models.CharField(max_length=30, default="")
    email = models.EmailField(max_length=300, default="")
    branch = models.ForeignKey(
        Branch,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.name}: {self.branch.Branch}"

class Account(models.Model):
    name = models.CharField(max_length=30, default="")
    balance = models.DecimalField(max_digits=100, decimal_places=2, default=0)
    holder = models.OneToOneField(
        Customer,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f"{self.name}: {self.holder}"

class Product(models.Model):
    name = models.CharField(max_length=30, default="")
    product_options = (
        ('savings', 'SAVINGS'),
        ('checking', 'CHECKING'),
    )
    product_options = models.CharField(
        max_length=30,
        choices=product_options,
        default=product_options[0],
    )

    def __str__(self):
        return f"{self.name}: {self.product_options}"