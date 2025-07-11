document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('modoBtn');

  boton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      boton.textContent = '☀️ Activar Modo Claro';
    } else {
      boton.textContent = '🌙 Activar Modo Oscuro';
    }
    <script>
  function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
  }
  });
});

