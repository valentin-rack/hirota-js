// ===== RENDER PRODUCTS =====
const productList = document.querySelector(".cards-grid");; // <ul class="product-list">

products.forEach(product => {
  const li = document.createElement("li");
  li.classList.add("card");

  // Divide la descripción en dos partes por el guion "-"
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



// ===== ADD TO CART =====

// Inicializamos el carrito desde localStorage (o vacío)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Seleccionamos todos los botones "Add to Cart"
const addButtons = document.querySelectorAll(".btn-add");

// Escuchamos cada click en los botones
addButtons.forEach(button => {
  button.addEventListener("click", () => {
    const productId = parseInt(button.dataset.id); // obtenemos el id del producto
    const productToAdd = products.find(p => p.id === productId); // lo buscamos con un find()

    if (productToAdd) {
      // Verificamos si ya está en el carrito
      const existingItem = cart.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity += 1; // si ya está, aumentamos cantidad
      } else {
        cart.push({ ...productToAdd, quantity: 1 }); // si no, lo agregamos
      }

      // Guardamos en localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Confirmación opcional (visual o alert)
      alert(`${productToAdd.name} added to cart!`);
    }
  });
});