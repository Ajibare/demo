let cartCount = localStorage.getItem('cartCount') || 0;

document.querySelector('.cart-icon').textContent = `Cart (${cartCount})`;

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        localStorage.setItem('cartCount', cartCount);
        document.querySelector('.cart-icon').textContent = `Cart (${cartCount})`;
    });
});
