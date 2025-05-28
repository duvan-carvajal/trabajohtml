function crearCuenta() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  if (!email || !password) {
    alert("Por favor completa todos los campos.");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (usuarios[email]) {
    alert("Este correo ya está registrado.");
    return;
  }

  usuarios[email] = { password };
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Cuenta creada con éxito. Ahora puedes iniciar sesión.");
  mostrar("login");
}

function iniciarSesion() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (!usuarios[email]) {
    alert("Este usuario no existe.");
    return;
  }

  if (usuarios[email].password !== password) {
    alert("Contraseña incorrecta.");
    return;
  }

  alert("¡Has iniciado sesión correctamente!");
  mostrar("inicio");
}

function adoptar(nombreGato) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById('formulario-adopcion').style.display = 'block';
  document.getElementById('nombre-gato-seleccionado').innerHTML = `<strong>Gato:</strong> ${nombreGato}`;
}
