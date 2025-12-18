// ===== LÓGICAS GENERALES =====

// Active nav-bar link modifier
document.querySelectorAll('.nav-left a, .nav-right a').forEach(link => {
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
const drawer = document.getElementById("mobileDrawer");
const overlay = document.getElementById("menuOverlay");
const closeBtn = document.getElementById("drawerCloseBtn");

function openMenu(){
  drawer.classList.add("is-open");
  overlay.classList.add("is-open");
  document.body.classList.add("no-scroll");
  hamburgerBtn.setAttribute("aria-expanded", "true");
  drawer.setAttribute("aria-hidden", "false");
}

function closeMenu(){
  drawer.classList.remove("is-open");
  overlay.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
  hamburgerBtn.setAttribute("aria-expanded", "false");
  drawer.setAttribute("aria-hidden", "true");
}

hamburgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// cerrar con ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// cerrar al clickear un link del drawer
drawer.addEventListener("click", (e) => {
  if (e.target.tagName === "A") closeMenu();
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
