// public/js/productScript.js
document.addEventListener("DOMContentLoaded", function () {
    // Fetch user data and products data here
    const user = { email: "test@example.com" }; // Replace with actual user data
    const products = []; // Replace with actual products data

    // Display username
    document.getElementById("username").innerText = user.email;

    // Create product cards
    const productList = document.getElementById("productList");
    products.forEach(category => {
        const categoryHeader = document.createElement("div");
        categoryHeader.classList.add("categoryHeader");
        categoryHeader.innerHTML = `<h2>${category.category}</h2><span class="arrowIcon">▼</span>`;
        categoryHeader.addEventListener("click", () => toggleCategory(category.category));
        productList.appendChild(categoryHeader);

        const productCategory = document.createElement("div");
        productCategory.classList.add("productCategory");
        productCategory.id = category.category;
        category.products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.thumbnail}">
                </div>
                <div class="product-details">
                    <h1>${product.title}</h1>
                    <p>${product.price}</p>
                    <button type="button" class="btn">Buy Now</button>
                </div>
            `;
            productCategory.appendChild(productCard);
        });
        productList.appendChild(productCategory);
    });

    // Logout button click event
    document.getElementById("logoutBtn").addEventListener("click", () => {
        // Handle logout logic here
        alert("Logout clicked!");
    });

    // Toggle category collapse/expand
    function toggleCategory(category) {
        const categoryElement = document.getElementById(category);
        categoryElement.classList.toggle("categoryCollapsed");
        const arrowIcon = categoryElement.previousElementSibling.querySelector('.arrowIcon');
        arrowIcon.innerText = categoryElement.classList.contains("categoryCollapsed") ? "▼" : "▲";
    }
});
