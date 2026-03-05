function ejecutar() {
  const segundos = parseInt(document.getElementById("tiempo").value);

  if (isNaN(segundos) || segundos < 0) {
    alert("Ingrese un número válido");
    return;
  }

  const tiempoBase = segundos * 1000;

  setTimeout(() => {
    alert("Han pasado " + segundos + " segundos");
  }, tiempoBase);

  const promesas = [];

  for (let i = 1; i <= 3; i++) {
    const aleatorio = Math.floor(Math.random() * 101);
    const tiempoTotal = tiempoBase + aleatorio;

    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promesa " + i + " resuelta en " + tiempoTotal + " ms");
      }, tiempoTotal);
    });

    promesas.push(promesa);
  }

  Promise.race(promesas).then((mensaje) => {
    alert(mensaje);
  });
}
