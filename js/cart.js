// ====== CART JS ======

// Obtenemos el carrito desde localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Elementos del DOM
const cartContainer = document.querySelector(".cart-items");
const clearBtn = document.querySelector(".btn-clear");
const subtotalSection = document.querySelector(".cart-summary");
const checkoutSection = document.querySelector(".cart-checkout");
const subtotalPrice = document.querySelector(".cart-subtotal-price");
const checkoutBtn = document.querySelector(".btn-checkout");


// ====== RENDER CART ======
function renderCart() {
  cartContainer.innerHTML = ""; // limpiamos el contenedor

  // Si no hay productos
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty :(</p>";

    // ocultamos subtotal y checkout
    subtotalSection.style.display = "none";
    checkoutSection.style.display = "none";

    // actualizamos contador si existe
    if (window.updateCartCount) updateCartCount();

    return;
  }

  // Si hay productos, mostramos subtotal y checkout
  subtotalSection.style.display = "";
  checkoutSection.style.display = "block";

  // Renderizar cada ítem
  cart.forEach(item => {
    const article = document.createElement("article");
    article.classList.add("cart-item");

    article.innerHTML = `
      <div class="cart-item-img-wrapper">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      </div>

      <div class="cart-item-info">
        <h2 class="cart-item-title">${item.name}</h2>
        <p class="cart-item-details">${item.description}</p>

        <div class="cart-item-qty">
          <span>qty:</span>
          <button class="btn-qty">−</button>
          <span class="qty-value">${item.quantity}</span>
          <button class="btn-qty">+</button>
        </div>

        <button class="btn-remove" data-id="${item.id}">Remove Item</button>
      </div>

      <span class="cart-item-price">USD $${item.price}</span>
    `;

    cartContainer.appendChild(article);
  });

  activateRemoveButtons();
  activateQuantityButtons();
  updateSubtotal();
}



// ====== REMOVE ITEM ======
function activateRemoveButtons() {
  const removeButtons = document.querySelectorAll(".btn-remove");

  removeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const idToRemove = parseInt(button.dataset.id);

      cart = cart.filter(item => item.id !== idToRemove);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();

      if (window.updateCartCount) updateCartCount();
    });
  });
}



// ====== CLEAR ALL ======
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    if (cart.length === 0) return;

    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();

    if (window.updateCartCount) updateCartCount();
  });
}



// ====== QUANTITY BUTTONS ======
function activateQuantityButtons() {
  const qtyButtons = document.querySelectorAll(".btn-qty");

  qtyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const article = button.closest(".cart-item");
      const id = parseInt(article.querySelector(".btn-remove").dataset.id);
      const item = cart.find(p => p.id === id);

      if (!item) return;

      if (button.textContent.trim() === "+") {
        item.quantity++;
      } else if (button.textContent.trim() === "−" && item.quantity > 1) {
        item.quantity--;
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      article.querySelector(".qty-value").textContent = item.quantity;

      updateSubtotal();

      if (window.updateCartCount) updateCartCount();
    });
  });
}



// ====== SUBTOTAL ======
function updateSubtotal() {
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  subtotalPrice.innerText = `USD $${total}`;
}



// ====== CHECKOUT ======
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) return; // si no hay productos, no hace nada

    // Vaciar carrito
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    let seconds = 3; // duración del contador

    // Mostrar mensaje inicial con contador
    cartContainer.innerHTML = `
      <h2 class="checkout-message">Thanks for buying! ありがとうございました (${seconds}s)</h2>
    `;

    // Ocultar subtotal y checkout
    subtotalSection.style.display = "none";
    checkoutSection.style.display = "none";

    // Actualizar count global
    if (window.updateCartCount) updateCartCount();

    // Referencia al elemento del mensaje
    const messageElem = document.querySelector(".checkout-message");

    // ====== CONTADOR REGRESIVO ======
    const interval = setInterval(() => {
      seconds--;
      messageElem.textContent = `Thanks for buying! ありがとうございました (${seconds}s)`;

      if (seconds === 0) {
        clearInterval(interval);
        location.reload(); // recarga la página
      }
    }, 1000);
  });
}



// ====== INIT ======
renderCart();
