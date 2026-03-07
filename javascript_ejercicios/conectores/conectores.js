var numCasosInput = document.getElementById("numCasos");
var btnGenerar = document.getElementById("btnGenerar");
var casosContainer = document.getElementById("casosContainer");
var calcularContainer = document.getElementById("calcularContainer");
var btnCalcular = document.getElementById("btnCalcular");

btnGenerar.addEventListener("click", function () {
  var numCasos = parseInt(numCasosInput.value);

  if (!numCasos || numCasos < 1 || numCasos > 100) {
    alert("Por favor ingresa un número válido entre 1 y 100");
    return;
  }

  casosContainer.innerHTML = "";

  for (var i = 1; i <= numCasos; i++) {
    var casoDiv = document.createElement("div");
    casoDiv.className = "caso";

    var titulo = document.createElement("h3");
    titulo.textContent = "Caso de prueba " + i;
    casoDiv.appendChild(titulo);

    var casoContent = document.createElement("div");
    casoContent.className = "caso-content";

    var conectorDiv = document.createElement("div");
    conectorDiv.className = "conector-section";

    var labelConector = document.createElement("label");
    labelConector.textContent = "Conector:";
    conectorDiv.appendChild(labelConector);

    var inputsConector = document.createElement("div");
    inputsConector.className = "inputs-row";

    for (var j = 0; j < 6; j++) {
      var input = document.createElement("input");
      input.type = "number";
      input.className = "conector-" + i;
      input.min = "0";
      input.max = "1";
      inputsConector.appendChild(input);
    }

    conectorDiv.appendChild(inputsConector);
    casoContent.appendChild(conectorDiv);

    var separador = document.createElement("div");
    separador.className = "separador";
    casoContent.appendChild(separador);

    var tomaDiv = document.createElement("div");
    tomaDiv.className = "tomacorriente-section";

    var labelToma = document.createElement("label");
    labelToma.textContent = "Tomacorriente:";
    tomaDiv.appendChild(labelToma);

    var inputsToma = document.createElement("div");
    inputsToma.className = "inputs-row";

    for (var j = 0; j < 6; j++) {
      var input = document.createElement("input");
      input.type = "number";
      input.className = "toma-" + i;
      input.min = "0";
      input.max = "1";
      inputsToma.appendChild(input);
    }

    tomaDiv.appendChild(inputsToma);
    casoContent.appendChild(tomaDiv);

    casoDiv.appendChild(casoContent);

    var resultadoDiv = document.createElement("div");
    resultadoDiv.className = "resultado";
    resultadoDiv.id = "resultado-" + i;
    casoDiv.appendChild(resultadoDiv);

    casosContainer.appendChild(casoDiv);
  }

  calcularContainer.style.display = "block";
});

btnCalcular.addEventListener("click", function () {
  var numCasos = parseInt(numCasosInput.value);

  for (var i = 1; i <= numCasos; i++) {
    var conectorInputs = document.querySelectorAll(".conector-" + i);
    var tomaInputs = document.querySelectorAll(".toma-" + i);

    var conector = [];
    var tomacorriente = [];

    for (var j = 0; j < 6; j++) {
      var valorConector = conectorInputs[j].value;
      var valorToma = tomaInputs[j].value;

      if (
        valorConector !== "0" &&
        valorConector !== "1" &&
        valorToma !== "0" &&
        valorToma !== "1"
      ) {
        alert("Todos los valores deben ser 0 o 1");
        return;
      }

      conector.push(parseInt(valorConector));
      tomacorriente.push(parseInt(valorToma));
    }

    var compatible = true;

    for (var j = 0; j < 6; j++) {
      if (conector[j] === tomacorriente[j]) {
        compatible = false;
        break;
      }
    }

    var resultadoDiv = document.getElementById("resultado-" + i);
    resultadoDiv.textContent = compatible ? "COMPATIBLE" : "INCOMPATIBLE";
    resultadoDiv.className = compatible
      ? "resultado compatible"
      : "resultado incompatible";
  }
});
