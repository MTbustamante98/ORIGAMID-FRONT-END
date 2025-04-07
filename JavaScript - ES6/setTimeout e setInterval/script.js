function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 60000, "Depois de 1min");

function espera(texto) {
  console.log(texto);
}
setTimeout(function () {
  console.log("Testando");
}, 1000);

// for(let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 300 * i);
// }

// function loop(texto) {
//   console.log(texto);
// }

// let i = 0;
// const loopInterval = setInterval(() => {
//   console.log(i++);
//   if (i > 20) clearInterval(loopInterval);
// }, 300);

// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// function mudarClasse() {
//   document.body.classList.toggle('active');
// }

// setInterval(mudarClasse, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
pausar.addEventListener("dblclick", resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute("disabled", "");
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled");
}

function resetarTempo() {
  tempo.innerText = 0;
  i = 0;
}
