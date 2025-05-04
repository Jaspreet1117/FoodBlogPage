const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const products = document.querySelectorAll(".product"); 

    products.forEach(product => {
        // Get the product name (the h2 inside each product)
        let pname = product.querySelector("h2").textContent || product.querySelector("h2").innerText;

        if (pname.toUpperCase().indexOf(searchbox) > -1) {
            product.style.display = "flex";  // Show the product if it matches
        } else {
            product.style.display = "none";  // Hide the product if it doesn't match
        }
    });
};  