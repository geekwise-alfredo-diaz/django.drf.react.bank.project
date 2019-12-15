from django.db import models

class Branch(models.Model):
    name = models.CharField(max_length=30)
    location = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name}: {self.location}"

class Customer(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=300)
    branch = models.ForeignKey(
        Branch,
        on_delete=models.CASCADE,
        null=True,
    )

    def __str__(self):
        return f"{self.name}: {self.branch}"

class Account(models.Model):
    name = models.CharField(max_length=30)
    balance = models.DecimalField(max_digits=100, decimal_places=2)
    holder = models.OneToOneField(
        Customer,
        on_delete=models.CASCADE,
        null=True,
    )

    def __str__(self):
        return f"{self.name}: {self.holder}"

class Product(models.Model):
    name = models.CharField(max_length=30)
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