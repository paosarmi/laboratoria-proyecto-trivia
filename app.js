function irAElegirTema(tipo) {
  localStorage.setItem("tipo", tipo);
  if (tipo === "rapido") {
    window.location.href = "choseGame.html";
  } else {
    window.location.href = "registro.html";
  }
}
function guardarUsuario() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  console.log(nombre);
  const usuario = {
    nombre: nombre,
    edad: edad,
  };
  console.log(usuario);
  console.log(usuario.nombre);
  console.log(usuario.edad);
  localStorage.setItem("usuario", usuario);
  window.location.href = "choseGame.html";
}
