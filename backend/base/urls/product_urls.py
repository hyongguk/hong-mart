from django.urls import path
from base.views import product_views as views

print('came in base/urls/product_urls')

urlpatterns = [

    path('', views.getProducts, name="products"),
    path('<str:pk>/', views.getProduct, name="product"),

]

print("clear product")