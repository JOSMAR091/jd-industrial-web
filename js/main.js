// Al cargar la página, revisa si el modo oscuro estaba activado antes
window.onload = () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
};

// Función que cambia el modo oscuro y guarda la preferencia
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}
