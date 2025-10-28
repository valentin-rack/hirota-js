// Detecta el archivo actual y marca el link "active"
document.querySelectorAll('.nav-left a, .nav-right a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Detecta el año actual para el copyright del footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});


// Mouse ASCII symbol trial effect
// document.addEventListener("mousemove", (e) => {
//   createFallingSymbol(e.clientX, e.clientY);
// });

// function createFallingSymbol(x, y) {
//   const symbol = document.createElement("span");
//   symbol.textContent = "+";
//   symbol.classList.add("falling-symbol");
//   symbol.style.left = `${x}px`;
//   symbol.style.top = `${y}px`;
//   document.body.appendChild(symbol);

//   // Eliminamos el símbolo tras la animación
//   setTimeout(() => {
//     symbol.remove();
//   }, 1500);
// }