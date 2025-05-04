const products = [
    { id: 1, name: "Cooking Set", price: 25.00, image: "img/product1.jpg" },
    { id: 2, name: "Frying Pan", price: 18.00, image: "img/product2.jpg" },
    { id: 3, name: "Chef Knife", price: 30.00, image: "img/product3.jpg" },
    { id: 4, name: "kitchen towels", price: 30.00, image: "img/product4.jpg" },
    { id: 5, name: "aprons", price: 30.00, image: "img/product5.jpg" },
    { id: 6, name: "recipes books", price: 30.00, image: "img/product6.jpg" },

];

let cart = [];

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        totalPrice.innerText = '0.00';
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" />
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <button class="remove" data-id="${item.id}">Remove</button>
            </div>
        `).join('');
        totalPrice.innerText = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
        checkoutBtn.disabled = false;
    }

    // Add event listeners to the "remove" buttons
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeItemFromCart);
    });
}

// Function to remove item from cart
function removeItemFromCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = parseInt(this.closest('.product-item').getAttribute('data-id'));
        const product = products.find(p => p.id === productId);

        // Add product to cart if it's not already in the cart
        if (!cart.find(item => item.id === product.id)) {
            cart.push(product);
            updateCart();
        }
    });
});

// Checkout button functionality
document.getElementById('checkout-btn').addEventListener('click', function() {
    document.querySelector('.cart').style.display = 'none';
    document.querySelector('.payment').style.display = 'block';
});

// Payment form submit functionality
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment successful! Thank you for your purchase.');
    cart = []; // Empty the cart after payment
    updateCart();
    document.querySelector('.payment').style.display = 'none';
    document.querySelector('.cart').style.display = 'block';
});