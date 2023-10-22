document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;
    let cartTotal = 0;
    
    // Função para verificar se o carrinho está vazio e ajustar a visibilidade//
    function checkCartVisibility() {
        const cart = document.querySelector('.cart');
        if (cartCount > 0) {
            cart.style.display = 'block';
        } else {
            cart.style.display = 'none';
        }
    }

    // Adiciona um evento de clique a todos os botões de "Adicionar ao Carrinho"//
    document.querySelectorAll('.botao').forEach((button, index) => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));
            
            cartCount++;
            updateCartCount(cartCount);
            cartTotal += productPrice;
            updateCartTotal(cartTotal);
            addToCart(productName, productPrice);
            checkCartVisibility(); // Verifica a visibilidade após adicionar um item//
        });
    });

    // Função para adicionar um item ao carrinho//
    function addToCart(productName, productPrice) {
        const cartItems = document.querySelector('.cart-items');

        const cartItem = document.createElement('li');
        cartItem.innerHTML = `${productName}: R$${productPrice.toFixed(2)} <button class="remove-button">Remover</button>`;
        cartItems.appendChild(cartItem);

        

        // Adiciona um evento de clique ao botão de remover do carrinho//
        cartItem.querySelector('.remove-button').addEventListener('click', function() {
            cartCount--;
            updateCartCount(cartCount);
            cartTotal -= productPrice;
            updateCartTotal(cartTotal);
            cartItems.removeChild(cartItem);
            checkCartVisibility(); // Verifica a visibilidade após remover um item//
        });
    }
    
            // Torne o carrinho visível quando algo for adicionado//
            document.querySelector('.cart').style.display = 'block';
            
            // Verifique se o carrinho está vazio após adicionar um item//
            if (cartCount > 0) {
                document.querySelector('.cart').style.display = 'block';
            } else {
                document.querySelector('.cart').style.display = 'none';
            }    
   

    // Função para atualizar a contagem de itens no carrinho//
    function updateCartCount(count) {
        const cartCountElement = document.querySelector('.cart-count');
        cartCountElement.textContent = count;
    }

    // Função para atualizar o total do carrinho//
    function updateCartTotal(total) {
        const cartTotalElement = document.querySelector('.cart-total');
        cartTotalElement.textContent = total.toFixed(2);
    }
});
