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
// =============== SEARCH / FILTER =================
// =================================================

// ===== SEARCH-BAR =====
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const text = searchInput.value.toLowerCase();

  // find() devuelve solo uno, pero queremos mostrar resultados parciales
  // así que usamos filter y mostramos todos los productos cuyo nombre coincida
  const results = products.filter(product =>
    product.name.toLowerCase().includes(text)
  );

  renderFiltered(results);
});


// ===== CATEGORY FILTERS =====
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    // UI state
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (category === "all") {
      renderFiltered(products);
      return;
    }

    const filtered = products.filter(p => p.category === category);
    renderFiltered(filtered);
  });
});


// ===== HELPER: RENDER ANY PRODUCT ARRAY =====
function renderFiltered(list) {
  productList.innerHTML = "";

  list.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("card");

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

  activateAddToCartButtons();
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


// se ejecutará automáticamente cuando loadProducts() lo invoque desde products.js

