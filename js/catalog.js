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