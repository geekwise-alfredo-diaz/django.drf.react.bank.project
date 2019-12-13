from django.contrib import admin
from django.urls import path
from rest_framework import routers
from bank.bank_holders import viewsets as bank_views

router = routers.DefaultRouter()

router.register(r'branches', bank_views.Branch_Viewset)
router.register(r'accounts', bank_views.Account_Viewset)
router.register(r'customers', bank_views.Customer_Viewset)
router.register(r'products', bank_views.Product_Viewset)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', router.urls),
]
