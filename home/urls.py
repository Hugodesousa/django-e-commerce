from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('<int:produto_id>', views.shop_item, name='shop_item'),
    path('carrinho',views.carrinho, name='carrinho'),
    path('adicionar_ao_carrinho/', views.adicionar_ao_carrinho, name='adicionar_ao_carrinho'),
    path('contar_itens_carrinho/', views.contar_itens_carrinho, name='contar_itens_carrinho')
]