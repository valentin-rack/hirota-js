// ====== CART RENDER & ACTIONS ======

// Obtenemos el carrito desde localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Contenedor principal de los ítems
const cartContainer = document.querySelector(".cart-items");
const clearBtn = document.querySelector(".btn-clear"); // NUEVO: botón "Clear all"

// Función principal para renderizar el carrito
function renderCart() {
  cartContainer.innerHTML = ""; // limpiamos el contenedor

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    updateSubtotal();
    return;
  }

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

  // Activamos los botones de acción
  activateRemoveButtons();
  activateQuantityButtons();

  // Actualizamos subtotal
  updateSubtotal();
}



// ====== REMOVE ITEM ======
function activateRemoveButtons() {
  const removeButtons = document.querySelectorAll(".btn-remove");

  removeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const idToRemove = parseInt(button.dataset.id);

      // Filtramos el carrito dejando afuera el producto seleccionado
      cart = cart.filter(item => item.id !== idToRemove);

      // Actualizamos localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Re-renderizamos el carrito
      renderCart();
    });
  });
}



// ====== CLEAR ALL ======
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    if (cart.length === 0) return; // si ya está vacío, no hace nada

    const confirmClear = confirm("Are you sure you want to clear the entire cart?");
    if (confirmClear) {
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });
}



// ====== QUANTITY BUTTONS ======
function activateQuantityButtons() {
  const qtyButtons = document.querySelectorAll(".btn-qty");

  qtyButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Identificar el producto asociado
      const article = button.closest(".cart-item");
      const id = parseInt(article.querySelector(".btn-remove").dataset.id);
      const item = cart.find(p => p.id === id);
      if (!item) return;

      // Detectar si el botón fue "+" o "−"
      const isIncrement = button.textContent.trim() === "+";
      const isDecrement = button.textContent.trim() === "−";

      if (isIncrement) {
        item.quantity += 1;
      } else if (isDecrement && item.quantity > 1) {
        item.quantity -= 1;
      }

      // Guardar cambios
      localStorage.setItem("cart", JSON.stringify(cart));

      // Actualizar la cantidad visible y el subtotal
      article.querySelector(".qty-value").textContent = item.quantity;
      updateSubtotal();
    });
  });
}



// ====== SUBTOTAL ======
function updateSubtotal() {
  const subtotalElem = document.querySelector(".cart-subtotal-price");
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  subtotalElem.textContent = `USD $${total}`;
}



// ====== INICIALIZACIÓN ======
renderCart();
