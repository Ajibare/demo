let cartCount = 0;

// Add to Cart functionality
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.querySelector('.cart-icon').textContent = `Cart (${cartCount})`;
    });
});

// User information and logout functionality
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        document.querySelector('#user-info').textContent = `Welcome, ${currentUser.username}`;
        document.querySelector('#user-info').innerHTML += ` | <a href="#" id="logout">Log Out</a>`;
        document.querySelector('#logout').addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const productItems = document.querySelectorAll('.product-item');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();

        productItems.forEach(item => {
            const productName = item.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(query)) {
                item.style.display = 'block'; // Show the product if it matches the search query
            } else {
                item.style.display = 'none'; // Hide the product if it doesn't match
            }
        });
    });
});


const searchInput = document.getElementById('search-input');
const searchResultsContainer = document.getElementById('search-results');

const products = [
    { name: 'Cross Bag', image: 'bag.jpg', price: '$20.99' },
    { name: 'Business Kit', image: 'business-kit.jpg', price: '$18.02' },
    { name: 'Rabbit Shirt', image: 'rabbit.jpg', price: '$23.85' },
    { name: 'Sport Ware', image: 'running.jpg', price: '$30.76' },
    { name: 'Eyeshadow', image: 'eyeshadow.jpg', price: '$20.59' },
    { name: 'Kit Tool Hammer', image: 'kit.jpg', price: '$40.98' },
    { name: 'Office Shirt', image: 'shirt.jpg', price: '$17.99' },
    { name: 'Interior Room Setup', image: 'room.jpg', price: '$19.99' },
    { name: 'T-Shirt', image: 't-shirt.jpg', price: '$15.78' }
];

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    searchResultsContainer.innerHTML = '';

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('search-result-item');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name} - ${product.price}</p>
            `;
            searchResultsContainer.appendChild(productElement);
        });
    } else {
        searchResultsContainer.innerHTML = '<p>No products found</p>';
    }
});

