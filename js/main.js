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
