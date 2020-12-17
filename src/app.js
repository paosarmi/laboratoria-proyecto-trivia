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

// variables globales resultados
var puntaje = 0;
var correctas = 0;
var incorrectas = 0;

function validarRespuestaEscogida(respuestaEscogida, preguntaNumero) {
  // se construyen los id de los botones respuesta
  const idRespuestaA = "p" + preguntaNumero + "ra"; // p + 1 + ra = p1ra
  const idRespuestaB = "p" + preguntaNumero + "rb";
  const idRespuestaC = "p" + preguntaNumero + "rc";
  const idRespuestaD = "p" + preguntaNumero + "rd";

  // guarda el boton
  let botonRespuestaA = document.getElementById(idRespuestaA);
  let botonRespuestaB = document.getElementById(idRespuestaB);
  let botonRespuestaC = document.getElementById(idRespuestaC);
  let botonRespuestaD = document.getElementById(idRespuestaD);

  // cambiar el backbround color de la etiqueta
  botonRespuestaA.style.backgroundColor = "grey";
  botonRespuestaB.style.backgroundColor = "grey";
  botonRespuestaC.style.backgroundColor = "grey";
  botonRespuestaD.style.backgroundColor = "grey";

  // validar respuesta correcta
  if (respuestaEscogida.name === "respuestaCorrecta") {
    console.log("respuesta correcta");
    respuestaEscogida.style.backgroundColor = "green";
    correctas = correctas + 1;
    puntaje = puntaje + 25;
  } else {
    console.log("respuesta incorrecta");
    respuestaEscogida.style.backgroundColor = "red";
    incorrectas = incorrectas + 1;
    if (botonRespuestaA.name === "respuestaCorrecta") {
      botonRespuestaA.style.backgroundColor = "green";
    }
    if (botonRespuestaB.name === "respuestaCorrecta") {
      botonRespuestaB.style.backgroundColor = "green";
    }
    if (botonRespuestaC.name === "respuestaCorrecta") {
      botonRespuestaC.style.backgroundColor = "green";
    }
    if (botonRespuestaD.name === "respuestaCorrecta") {
      botonRespuestaD.style.backgroundColor = "green";
    }
  }

  // deshabilitar botones
  botonRespuestaA.disabled = true;
  botonRespuestaB.disabled = true;
  botonRespuestaC.disabled = true;
  botonRespuestaD.disabled = true;

  // mostrar boton siguiente
  const idBotonSiguiente = "p" + preguntaNumero + "botonoSiguiente";
  let botonSiguiente = document.getElementById(idBotonSiguiente);
  botonSiguiente.className = "visible";
}

function irASiguientePregunta(preguntaNumero) {
  // oculatar pregunta ya resuelta
  const idPreguntaAnterior = "pregunta" + preguntaNumero; // "pregunta" + 1
  let seccionPregunaAnterior = document.getElementById(idPreguntaAnterior);
  seccionPregunaAnterior.className = "invisible";

  // mostrar pregunta siguiente
  const numeroSiguientePregunta = Number(preguntaNumero) + 1; //Variable tipo NUMBER convierte el string (pregunta numero) en un entero para sumarse +1
  const idSiguientePregunta = "pregunta" + numeroSiguientePregunta;
  let seccionSiguientePregunta = document.getElementById(idSiguientePregunta);
  seccionSiguientePregunta.className = "visible";
}

function finalizarTrivia() {
  localStorage.setItem("puntaje", puntaje);
  localStorage.setItem("correctas", correctas);
  localStorage.setItem("incorrectas", incorrectas);
  window.location.href = "resultados.html";
}
