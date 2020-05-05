function irAElegirTema(tipo) {
  localStorage.setItem("tipo", tipo);
  if (tipo === "rapido") {
    window.location.href = "chooseGame.html";
  } else {
    window.location.href = "registro.html";
  }
}
function guardarUsuario() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const usuario = {
    nombre: nombre,
    edad: edad,
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));
  window.location.href = "chooseGame.html";
}
