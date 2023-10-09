    // function contadorDoCarrinho() {
        
    //     const lista = JSON.parse(localStorage.getItem("lista_de_compras"));

    //     if (!lista) return null;

    //     const qtdCarrinho = document.getElementById("qtdCarrinho");

    //     qtdCarrinho.textContent = lista.length;

    // }

// function adicionarAoCarrinhoo(produto_id) {

//     const item = { id: produto_id, qtd: 1 };
//     const lista = JSON.parse(localStorage.getItem("lista_de_compras"));
    
//     if (!lista) {
//         localStorage.setItem("lista_de_compras", JSON.stringify([item]));
//         const lista = JSON.parse(localStorage.getItem("lista_de_compras"));
//         contadorDoCarrinho();
//         return lista.length;
//     }
    
//     const itemJaExiste = lista.some(item => item.id === produto_id);

//     if (!itemJaExiste) {
//         lista.push(item);
//         localStorage.removeItem("lista_de_compras");
//         localStorage.setItem("lista_de_compras", JSON.stringify(lista));
//         contadorDoCarrinho();
//         return lista.length;
//     }

//     return lista.length;

// }

function contadorDoCarrinho() {
    $.ajax({
        type: 'GET',
        url: '/contar_itens_carrinho/', // Substitua pela URL correta
        dataType: 'json',
        success: function (response) {
            if (response.qtd) {
                const qtdCarrinho = document.getElementById("qtdCarrinho");
                qtdCarrinho.textContent = response.qtd;
            }
        },
        error: function (error) {
            // Trate erros de solicitação AJAX
        }
    });
}

function adicionarAoCarrinho(produto_id) {
    $.ajax({
        type: 'POST',
        url: '/adicionar_ao_carrinho/', // Substitua pela URL correta
        data: { produto_id: produto_id },
        dataType: 'json',
        success: function (response) {
            if (response.success) {
                // O produto foi adicionado ao carrinho com sucesso
                // Você pode atualizar a interface do usuário conforme necessário
                contadorDoCarrinho();
            } else {
                // Trate qualquer erro que possa ocorrer na adição ao carrinho
            }
        },
        error: function (error) {
            // Trate erros de solicitação AJAX
        }
    });
}