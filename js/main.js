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