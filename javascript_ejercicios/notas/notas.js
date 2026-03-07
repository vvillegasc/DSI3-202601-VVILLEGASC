// Obtener elementos del HTML
var inputNumEstudiantes = document.getElementById("numEstudiantes");
var btnEvaluar = document.getElementById("btnEvaluar");
var notasContainer = document.getElementById("notasContainer");

btnEvaluar.addEventListener("click", function () {
  var numEstudiantes = parseInt(inputNumEstudiantes.value);

  if (numEstudiantes < 1 || numEstudiantes > 50) {
    alert("Ingrese un número entre 1 y 50");
    return;
  }

  notasContainer.innerHTML = "";

  for (var i = 1; i <= numEstudiantes; i++) {
    var estudianteDiv = document.createElement("div");
    estudianteDiv.className = "estudiante";

    var titulo = document.createElement("span");
    titulo.textContent = "Estudiante " + i + ":";
    estudianteDiv.appendChild(titulo);

    var notasGrupo = document.createElement("div");
    notasGrupo.className = "notas-grupo";

    for (var j = 1; j <= 3; j++) {
      var label = document.createElement("label");
      label.textContent = "Nota " + j + ":";
      notasGrupo.appendChild(label);

      var input = document.createElement("input");
      input.type = "number";
      input.className = "nota-estudiante-" + i;
      notasGrupo.appendChild(input);
    }

    estudianteDiv.appendChild(notasGrupo);

    var resultadoSpan = document.createElement("span");
    resultadoSpan.className = "resultado-estudiante";
    resultadoSpan.id = "resultado-" + i;
    estudianteDiv.appendChild(resultadoSpan);

    notasContainer.appendChild(estudianteDiv);
  }

  var btnCalcular = document.createElement("button");
  btnCalcular.textContent = "Calcular";
  btnCalcular.addEventListener("click", calcularNotas);
  notasContainer.appendChild(btnCalcular);
});

function calcularNotas() {
  var numEstudiantes = parseInt(inputNumEstudiantes.value);

  for (var i = 1; i <= numEstudiantes; i++) {
    var inputs = document.querySelectorAll(".nota-estudiante-" + i);
    var notas = [];

    for (var j = 0; j < inputs.length; j++) {
      var nota = parseFloat(inputs[j].value);
      if (nota < 0 || nota > 100) {
        alert("Ingrese notas válidas entre 0 y 100");
        return;
      }
      notas.push(nota);
    }

    notas.sort(function (a, b) {
      return a - b;
    });

    var notaMedia = notas[1];

    var resultadoSpan = document.getElementById("resultado-" + i);
    resultadoSpan.textContent = "Nota final: " + notaMedia;
  }
}
