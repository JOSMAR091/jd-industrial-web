function toggleModo() {
  const body = document.body;
  const boton = document.getElementById('modoBtn');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    boton.textContent = '☀️ Activar Modo Claro';
  } else {
    boton.textContent = '🌙 Activar Modo Oscuro';
  }
}
