// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('modoBtn');

  // Verifica que el botón exista
  if (boton) {
    boton.addEventListener('click', function () {
      // Alterna la clase 'dark-mode' en el <body>
      document.body.classList.toggle('dark-mode');

      // Cambia el texto del botón según el modo
      if (document.body.classList.contains('dark-mode')) {
        boton.textContent = '☀️ Activar Modo Claro';
      } else {
        boton.textContent = '🌙 Activar Modo Oscuro';
      }
    });
  }
});
