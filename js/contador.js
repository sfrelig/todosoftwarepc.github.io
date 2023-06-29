// Fecha de inicio del cronómetro (reemplazar con la fecha deseada)
const fechaInicio = new Date('2021-09-15T17:24:00');
let intervalo;

// Función para actualizar el cronómetro
function actualizarCronometro() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  // Cálculo de los componentes de tiempo
  let segundos = Math.floor(diferencia / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);
  let meses = Math.floor(dias / 30);
  let anios = Math.floor(meses / 12);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  dias %= 30;
  meses %= 12;

  // Actualizar los elementos HTML con los valores del cronómetro
  document.getElementById('anios').textContent = anios;
  document.getElementById('meses').textContent = meses;
  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = horas < 10 ? '0' + horas : horas;
  document.getElementById('minutos').textContent = minutos < 10 ? '0' + minutos : minutos;
  document.getElementById('segundos').textContent = segundos < 10 ? '0' + segundos : segundos;
}

// Iniciar el cronómetro
function iniciarCronometro() {
  intervalo = setInterval(actualizarCronometro, 1000);
}

// Detener el cronómetro
function detenerCronometro() {
  clearInterval(intervalo);
}

// Actualizar el cronómetro inicialmente
actualizarCronometro();

// Iniciar el cronómetro
iniciarCronometro();
