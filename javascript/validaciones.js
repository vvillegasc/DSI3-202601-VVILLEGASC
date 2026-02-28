function validar() {
  const nombre = document.getElementById("nombre").value;
  alert("Hola, " + nombre);

  const edad = document.getElementById("edad").value;

  if (edad >= 18) {
    alert("Eres mayor de edad");
  } else {
    alert("Eres menor de edad");
  }

  const nota = document.getElementById("nota").value;

  if (nota >= 3) {
    alert("Aprobó");
  } else {
    alert("Reprobó");
  }
}
