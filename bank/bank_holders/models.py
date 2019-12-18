from django.db import models

class Branch(models.Model):
    name = models.CharField(max_length=30)
    location = models.CharField(max_length=100, default='Earth')

    def __str__(self):
        return f"{self.name}: {self.location}"

class Customer(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=300, default='domain@setup.com')
    branch = models.ForeignKey(
        Branch,
        on_delete=models.CASCADE,
        null=True,
    )

    def __str__(self):
        return f"{self.name}: {self.branch}"

class Account(models.Model):
    name = models.CharField(max_length=30)
    balance = models.DecimalField(max_digits=100, decimal_places=2, default=0)
    holder = models.OneToOneField(
        Customer,
        on_delete=models.CASCADE,
        null=True,
    )

    def __str__(self):
        return f"{self.name}: {self.holder}"

class Product(models.Model):
    def __str__(self):
        return 'Product'
    # name = models.CharField(max_length=30)
    # email = models.CharField(max_length=300, default='Email@domain.setup')
    # product_options = (
    #     ('savings', 'SAVINGS'),
    #     ('checking', 'CHECKING'),
    # )
    # product_options = models.CharField(
    #     max_length=30,
    #     choices=product_options,
    #     default=product_options[0],
    # )

    # def __str__(self):
    #     return f"{self.name}: {self.product_options}"

# Fields needing a default: balance, location, email