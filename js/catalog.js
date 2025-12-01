// ===== GLOBAL REFERENCES =====
const productList = document.querySelector(".cards-grid"); // contenedor <ul>
let cart = JSON.parse(localStorage.getItem("cart")) || []; // carrito desde localStorage


// =================================================
// =============== RENDER PRODUCTS =================
// =================================================
function renderProducts() {
  productList.innerHTML = ""; // limpiamos antes de renderizar

  products.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("card");

    // Divide la descripción en dos partes por el guion "|"
    const [desc1, desc2] = product.description.split(/[|]/).map(str => str.trim());

    li.innerHTML = `
      <div class="card-image">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="card-content">
        <p class="card-title">${product.name}</p>

        <div class="card-details">
          <p>${desc1}</p>
          <p>${desc2}</p>
        </div>

        <div class="card-price-action">
          <span class="card-price">USD $${product.price}</span>
          <button class="btn-add" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `;

    productList.appendChild(li);
  });

  activateAddToCartButtons(); // importante: activar luego de renderizar
}



// =================================================
// ================= ADD TO CART ===================
// =================================================
function activateAddToCartButtons() {
  const addButtons = document.querySelectorAll(".btn-add");

  addButtons.forEach(button => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.id); // obtenemos el id del producto
      const productToAdd = products.find(p => p.id === productId); // lo buscamos con un find()

      if (productToAdd) {
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
          existingItem.quantity += 1; // si ya está, aumentamos cantidad
        } else {
          cart.push({ ...productToAdd, quantity: 1 }); // si no, lo agregamos
        }

        localStorage.setItem("cart", JSON.stringify(cart)); // guardamos

        if (window.updateCartCount) updateCartCount(); // notificamos al header


        // ===== TOASTIFY FEEDBACK =====
        Toastify({
          text: "Product added!",
          duration: 2500,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "rgba(255, 60, 60, 0.8)", // rojo suave
            color: "#fff",
            borderRadius: "6px",
            fontFamily: "Consolas, monospace",
          }
        }).showToast();


        // ===== CART DOT ANIMATION =====
        const cartLink = document.getElementById("cart-link");
        if (cartLink) {
          const dot = document.createElement("span");
          dot.classList.add("cart-ping");
          cartLink.parentElement.appendChild(dot);
          setTimeout(() => dot.remove(), 600);
        }
      }
    });
  });
}



// =================================================
// =============== WAIT FOR PRODUCTS ===============
// =================================================
// Esta función viene del archivo products.js y cargará los productos desde JSON
// Cuando loadProducts() termine, llamará a renderProducts()


// MUY IMPORTANTE: NUNCA LLAMES A renderProducts() AQUÍ
// se ejecutará automáticamente cuando loadProducts() lo invoque desde products.js

