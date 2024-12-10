function submitForm(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim(); // Obtém o valor da busca e remove espaços em branco
  
    if (searchTerm) {
      // Redireciona para a página de busca com o parâmetro de busca na URL
      window.location.href = `index.php?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Função para remover um item do carrinho
function removeItem(event) {
  const cartItem = event.target.closest('.cart-item');
  if (cartItem) {
    cartItem.remove();
  }
}

// Função para limpar o carrinho
function clearCart() {
  const cartItems = document.querySelectorAll('.cart-item');
  cartItems.forEach(item => item.remove());
}

// Função para prosseguir com a compra (pode ser personalizada conforme necessário)
function proceedToCheckout() {
  alert('Redirecionar para a página de checkout ou outra ação relacionada à compra.');
}

// Eventos dos botões
document.getElementById('clearCartButton').addEventListener('click', clearCart);
document.getElementById('checkoutButton').addEventListener('click', proceedToCheckout);

function refundProduct(button) {
  var listItem = button.parentNode;
  listItem.remove();
}


  