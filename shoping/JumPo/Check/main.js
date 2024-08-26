document.querySelector('#checkout-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#full-name').value;
  const address = document.querySelector('#address').value;
  const city = document.querySelector('#city').value;
  const state = document.querySelector('#state').value;
  const zip = document.querySelector('#zip').value;
  const cardNumber = document.querySelector('#card-number').value;
  const expDate = document.querySelector('#exp-date').value;
  const cvv = document.querySelector('#cvv').value;

  if (!name || !address || !city || !state || !zip || !cardNumber || !expDate || !cvv) {
      alert('Please fill in all fields.');
      return;
  }

  alert('Purchase completed successfully!');
  
  // Clear the cart
  localStorage.removeItem('cartItems');
  localStorage.removeItem('cartCount');
  document.querySelector('.cart-icon').textContent = 'Cart (0)';
  window.location.href = 'index.html';
});
