from django.shortcuts import render, get_object_or_404, get_list_or_404
from .models import Produtos
from django.http import JsonResponse

# from django.http import HttpResponse


def index (request):
    produtos_lista = Produtos.objects.all()
    return render(request,'index.html',{'produtos':produtos_lista})

def shop_item(request, produto_id):
    # produtos_lista = Produtos.objects.all()
    produto = get_object_or_404(Produtos, pk=produto_id)

    protuto_selecionado = {
        'produto': produto
    }

    return render(request, 'shop_item.html', protuto_selecionado)

def carrinho(request):
    return render(request,'carrinho.html')

def adicionar_ao_carrinho(request):
    produto_id = request.POST.get('produto_id')

    # Verifique se a sessão já possui um carrinho
    carrinho = request.session.get('carrinho', [])

    # Verifique se o produto já está no carrinho
    produto_existe = False
    for item in carrinho:
        if item['id'] == produto_id:
            item['qtd'] += 1
            produto_existe = True
            break

    if not produto_existe:
        carrinho.append({'id': produto_id, 'qtd': 1})

    request.session['carrinho'] = carrinho

    return JsonResponse({'success': True})

def contar_itens_carrinho(request):
    carrinho = request.session.get('carrinho', [])
    qtd_carrinho = len(carrinho)
    return JsonResponse({'qtd': qtd_carrinho})