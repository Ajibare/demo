let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

document.querySelector('.cart-icon').textContent = `Cart (${cartItems.length})`;

function renderCart() {
    const cartContainer = document.querySelector('.cart-items');
    const cartSummary = document.querySelector('.cart-summary h3');
    cartContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <label for="quantity-${index}">Quantity:</label>
                <input type="number" id="quantity-${index}" value="${item.quantity}" min="1">
            </div>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;

        cartContainer.appendChild(cartItem);

        total += item.price * item.quantity;

        cartItem.querySelector(`#quantity-${index}`).addEventListener('change', (e) => {
            const quantity = parseInt(e.target.value, 10);
            item.quantity = quantity;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            renderCart();
        });

        cartItem.querySelector('.remove-btn').addEventListener('click', () => {
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            document.querySelector('.cart-icon').textContent = `Cart (${cartItems.length})`;
            renderCart();
        });
    });

    cartSummary.textContent = `Total: $${total.toFixed(2)}`;
}

if (document.querySelector('.cart-items')) {
    renderCart();
}

document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = button.closest('.product-item');
        const name = product.querySelector('h3').textContent;
        const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));
        const image = product.querySelector('img').src;

        const existingItem = cartItems.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ name, price, image, quantity: 1 });
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        document.querySelector('.cart-icon').textContent = `Cart (${cartItems.length})`;
    });
});


const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});


function updateCart() {
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    document.querySelector('.cart-icon').textContent = `Cart (${cartCount})`;
    
    let total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    document.querySelector('.cart-summary h3').textContent = `Total: $${total.toFixed(2)}`;
}

document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', () => {
        // Your existing logic to add items to cart...
        updateCart();
    });
});

// Update cart when page loads
updateCart();
