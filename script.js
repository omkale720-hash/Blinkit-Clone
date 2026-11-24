let cartCount = 0;

function updateCart() {
    const cart = document.querySelector(".cart");

    if (cart) {
        cart.innerText = `My Cart (${cartCount})`;
    }
}


function addButtonFunction(button) {

    let quantity = 0;

    function showQuantity() {

        button.innerHTML = `
            <span class="minus">−</span>
            <span class="quantity">${quantity}</span>
            <span class="plus">+</span>
        `;

        button.classList.add("quantity-btn");

        button.querySelector(".plus").onclick = function (e) {
            e.stopPropagation();

            quantity++;
            cartCount++;

            button.querySelector(".quantity").innerText = quantity;
            updateCart();
        };

        button.querySelector(".minus").onclick = function (e) {
            e.stopPropagation();

            quantity--;
            cartCount--;

            updateCart();

            if (quantity === 0) {
                button.innerHTML = "ADD";
                button.classList.remove("quantity-btn");
                button.onclick = function () {
                    quantity = 1;
                    cartCount++;
                    updateCart();
                    showQuantity();
                };
            } else {
                button.querySelector(".quantity").innerText = quantity;
            }
        };
    }

    button.onclick = function () {
        quantity = 1;
        cartCount++;

        updateCart();
        showQuantity();
    };
}

document.querySelectorAll(".add-btn, .drink-add-btn").forEach(button => {
    addButtonFunction(button);
});

// SHOP NOW BUTTON
document.querySelector(".stock-up-btn").addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(".category-section").scrollIntoView({
        behavior: "smooth"
    });
});


// ORDER NOW BUTTON
document.querySelectorAll(".promo-btn").forEach(function(button) {

    button.addEventListener("click", function(e) {
        e.preventDefault();

        let category = this.closest(".promo-card").querySelector("h2").innerText;

        alert("Thank you for choosing " + category + "!");

    });

});