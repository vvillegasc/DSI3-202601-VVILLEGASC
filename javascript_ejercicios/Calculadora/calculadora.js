var btnCalcular = document.getElementById("btnCalcular");
var resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function () {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);
  var nota5 = parseFloat(document.getElementById("nota5").value);
  var nota6 = parseFloat(document.getElementById("nota6").value);
  var nota7 = parseFloat(document.getElementById("nota7").value);
  var nota8 = parseFloat(document.getElementById("nota8").value);

  if (
    isNaN(nota1) ||
    isNaN(nota2) ||
    isNaN(nota3) ||
    isNaN(nota4) ||
    isNaN(nota5) ||
    isNaN(nota6) ||
    isNaN(nota7) ||
    isNaN(nota8)
  ) {
    alert("Ingrese todas las notas");
    return;
  }

  if (
    nota1 < 1 ||
    nota1 > 5 ||
    nota2 < 1 ||
    nota2 > 5 ||
    nota3 < 1 ||
    nota3 > 5 ||
    nota4 < 1 ||
    nota4 > 5 ||
    nota5 < 1 ||
    nota5 > 5 ||
    nota6 < 1 ||
    nota6 > 5 ||
    nota7 < 1 ||
    nota7 > 5 ||
    nota8 < 1 ||
    nota8 > 5
  ) {
    alert("Todas las notas deben estar entre 1 y 5");
    return;
  }

  var notaFinal =
    nota1 * 0.05 +
    nota2 * 0.1 +
    nota3 * 0.1 +
    nota4 * 0.1 +
    nota5 * 0.15 +
    nota6 * 0.15 +
    nota7 * 0.15 +
    nota8 * 0.2;

  resultado.textContent = "Nota final: " + notaFinal.toFixed(2);
});
