function toggleModo() {
  const body = document.body;
  const boton = document.getElementById('modoBtn');

  body.classList.toggle('modo-oscuro');

  if (body.classList.contains('modo-oscuro')) {
    boton.textContent = '☀️ Activar Modo Claro';
  } else {
    boton.textContent = '🌙 Activar Modo Oscuro';
  }
}
