const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let minute = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    horas.textContent = hour;
    minutos.textContent = minute;
    segundos.textContent = seconds;
})