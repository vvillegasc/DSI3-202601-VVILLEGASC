var inputNumEstudiantes = document.getElementById("numEstudiantes");
var btnEvaluar = document.getElementById("btnEvaluar");
var notasContainer = document.getElementById("notasContainer");
var resultado = document.getElementById("resultado");

btnEvaluar.addEventListener("click", function () {
  var numPartidos = parseInt(inputNumEstudiantes.value);

  if (numPartidos < 1 || numPartidos > 100) {
    alert("Ingrese un número entre 1 y 100");
    return;
  }

  notasContainer.innerHTML = "";
  resultado.innerHTML = "";

  for (var i = 1; i <= numPartidos; i++) {
    var partidoDiv = document.createElement("div");
    partidoDiv.className = "partido";

    var titulo = document.createElement("h3");
    titulo.textContent = "Partido " + i;
    partidoDiv.appendChild(titulo);

    var rowDiv = document.createElement("div");
    rowDiv.className = "partido-row";

    var divBrasil = document.createElement("div");
    divBrasil.className = "goles-input";
    var labelBrasil = document.createElement("label");
    labelBrasil.textContent = "Goles Brasil:";
    divBrasil.appendChild(labelBrasil);
    var inputBrasil = document.createElement("input");
    inputBrasil.type = "number";
    inputBrasil.className = "goles-brasil-" + i;
    inputBrasil.min = "0";
    divBrasil.appendChild(inputBrasil);
    rowDiv.appendChild(divBrasil);

    var divColombia = document.createElement("div");
    divColombia.className = "goles-input";
    var labelColombia = document.createElement("label");
    labelColombia.textContent = "Goles Colombia:";
    divColombia.appendChild(labelColombia);
    var inputColombia = document.createElement("input");
    inputColombia.type = "number";
    inputColombia.className = "goles-colombia-" + i;
    inputColombia.min = "0";
    divColombia.appendChild(inputColombia);
    rowDiv.appendChild(divColombia);

    var resultadoPartido = document.createElement("div");
    resultadoPartido.className = "resultado-partido";
    resultadoPartido.id = "resultado-partido-" + i;
    rowDiv.appendChild(resultadoPartido);

    partidoDiv.appendChild(rowDiv);
    notasContainer.appendChild(partidoDiv);
  }

  var btnCalcular = document.createElement("button");
  btnCalcular.textContent = "Calcular";
  btnCalcular.addEventListener("click", calcularResultados);
  notasContainer.appendChild(btnCalcular);
});

function calcularResultados() {
  var numPartidos = parseInt(inputNumEstudiantes.value);

  for (var i = 1; i <= numPartidos; i++) {
    var inputBrasil = document.querySelector(".goles-brasil-" + i);
    var inputColombia = document.querySelector(".goles-colombia-" + i);

    var golesBrasil = parseInt(inputBrasil.value);
    var golesColombia = parseInt(inputColombia.value);

    if (
      isNaN(golesBrasil) ||
      isNaN(golesColombia) ||
      golesBrasil < 0 ||
      golesColombia < 0
    ) {
      alert("Ingrese valores válidos");
      return;
    }

    var resultadoDiv = document.getElementById("resultado-partido-" + i);
    var mensaje = "";
    var clase = "";

    if (golesColombia > golesBrasil) {
      mensaje = "ganamos";
      clase = "ganamos";
    } else if (golesBrasil > golesColombia) {
      mensaje = "perdimos";
      clase = "perdimos";
    } else {
      mensaje = "casi ganamos";
      clase = "empate";
    }

    resultadoDiv.textContent = mensaje;
    resultadoDiv.className = "resultado-partido " + clase;
  }
}
