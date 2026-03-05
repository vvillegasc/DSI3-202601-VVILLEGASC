const btnJugar = document.getElementById("btnJugar");
const btnCalcular = document.getElementById("btnCalcular");
const numJuegosInput = document.getElementById("numJuegos");
const resultadosContainer = document.getElementById("resultadosContainer");
const calcularContainer = document.getElementById("calcularContainer");

btnJugar.addEventListener("click", generarSelects);
btnCalcular.addEventListener("click", calcularGanador);

function generarSelects() {
  const numJuegos = parseInt(numJuegosInput.value);

  if (!numJuegos || numJuegos < 1 || numJuegos > 100) {
    alert("Por favor ingresa un número válido entre 1 y 100");
    return;
  }

  resultadosContainer.innerHTML = "";

  for (let i = 1; i <= numJuegos; i++) {
    const juegoDiv = document.createElement("div");
    juegoDiv.className = "juego-item";

    const label = document.createElement("label");
    label.textContent = `Juego ${i}:`;

    const select = document.createElement("select");
    select.className = "resultado-select";

    const opciones = ["", "ALICE", "BOB", "EMPATE"];
    opciones.forEach((opcion) => {
      const option = document.createElement("option");
      option.value = opcion;
      option.textContent = opcion || "Selecciona...";
      select.appendChild(option);
    });

    juegoDiv.appendChild(label);
    juegoDiv.appendChild(select);
    resultadosContainer.appendChild(juegoDiv);
  }

  calcularContainer.style.display = "block";
}

function calcularGanador() {
  const selects = document.querySelectorAll(".resultado-select");

  for (let select of selects) {
    if (!select.value) {
      alert("Por favor completa todos los resultados antes de calcular");
      return;
    }
  }

  let puntosAlice = 0;
  let puntosBob = 0;

  selects.forEach((select) => {
    const resultado = select.value;

    if (resultado === "ALICE") {
      puntosAlice += 2;
    } else if (resultado === "BOB") {
      puntosBob += 2;
    } else if (resultado === "EMPATE") {
      puntosAlice += 1;
      puntosBob += 1;
    }
  });

  let ganador;
  if (puntosAlice > puntosBob) {
    ganador = "ALICE";
  } else if (puntosBob > puntosAlice) {
    ganador = "BOB";
  } else {
    ganador = "EMPATE";
  }

  alert(
    `Resultado Final:\nAlice: ${puntosAlice} puntos\nBob: ${puntosBob} puntos\n\nGanador: ${ganador}`,
  );
}
