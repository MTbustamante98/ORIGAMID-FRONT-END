const contador = document.getElementById('contador');
let cont = 0;

const timer = setInterval(() => {
  cont++
  contador.innerText = cont;
  if (cont >= 100) {
    clearInterval(timer)
  }
}, 50);

