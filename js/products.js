// ===== GLOBAL PRODUCTS ARRAY =====
let products = [];

// ===== LOAD PRODUCTS FROM JSON =====
async function loadProducts() {
  try {
    const response = await fetch("../data/products.json"); // ruta al JSON
    products = await response.json();

    // Si esta página debe renderizar productos, lo hacemos aquí:
    if (typeof renderProducts === "function") {
      renderProducts();
    }
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

// ===== START LOADING =====
loadProducts();
