// ===== LÓGICAS GENERALES =====

// Active nav-bar link modifier
document.querySelectorAll('.nav-left a, .nav-right a, .mobile-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});



// ===== MOBILE NAV-BAR LOGICS =====
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileCloseBtn = document.getElementById("mobileCloseBtn");

function openMobileMenu() {
  mobileMenu.classList.add("is-open");
  mobileOverlay.classList.add("is-open");
  document.body.classList.add("no-scroll");
  mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("is-open");
  mobileOverlay.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
  mobileMenu.setAttribute("aria-hidden", "true");
}

hamburgerBtn.addEventListener("click", openMobileMenu);
mobileCloseBtn.addEventListener("click", closeMobileMenu);
mobileOverlay.addEventListener("click", closeMobileMenu);

// Cerrar con ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileMenu();
});

// Cerrar al tocar un link
mobileMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") closeMobileMenu();
});



// ===== UPDATE CART COUNT GLOBALLY =====

// Función que actualiza el número de ítems en el enlace del carrito
function updateCartCount() {
  const cartLink = document.getElementById("cart-link");
  const cartHeader = document.querySelector(".cart-header h1"); // header del carrito

  // Si no existe ni navbar ni header, no hacemos nada
  if (!cartLink && !cartHeader) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Calculamos la cantidad total de unidades (sumando las quantities)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Actualizamos el texto del link en el navbar
  if (cartLink) {
    cartLink.textContent = `Cart (${totalItems})`;
  }

  // Actualizamos el header del carrito si existe
  if (cartHeader) {
    cartHeader.textContent = `CART (${totalItems})`;
  }
}

// Ejecutar apenas se carga la página
document.addEventListener("DOMContentLoaded", updateCartCount);

// Hacer disponible la función globalmente (para usarla desde otros scripts)
window.updateCartCount = updateCartCount;
