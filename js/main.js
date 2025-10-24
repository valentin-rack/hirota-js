// Detecta el archivo actual y marca el link "active"
document.querySelectorAll('.nav-left a, .nav-right a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});