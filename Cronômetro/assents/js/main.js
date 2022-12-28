const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const sec = document.querySelector("#sec");
const minute = document.querySelector("#minute");
let segundos = 0;
let minutos = 0;
let intervalo;

start.onclick = function () {
  intervalo = setInterval(timer, 1000);
};
stop.onclick = function () {
  clearInterval(intervalo);
};
reset.onclick = function () {
  clearInterval(intervalo);
  segundos = 0;
  minutos = 0;
  sec.innerHTML = "00";
  minute.innerHTML = "00";
};

function timer() {
  var textSec;
  var textMin;
  segundos++;

  if (segundos > 59) {
    minutos++;
    segundos = 0;
  }

  if (segundos < 10) textSec = `0${segundos}`;
  else textSec = segundos;

  if (minutos < 10) textMin = `0${minutos}`;
  else textMin = minutos;

  sec.innerHTML = textSec;
  minute.innerHTML = textMin;
}
