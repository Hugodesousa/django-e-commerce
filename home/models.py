from django.db import models

# Create your models here.
class Produtos(models.Model):
    nome_produto = models.CharField(max_length=200)
    descricao = models.TextField()
    preco = models.FloatField()
    quantidade_estoque = models.IntegerField()
    categoria = models.CharField(max_length=30)
    image = models.CharField(max_length=200)

    def __str__(self):
        return self.nome_produto