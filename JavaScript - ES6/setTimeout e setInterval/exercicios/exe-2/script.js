// Exercício 2: Contador Regressivo
// Crie um <span> para exibir um contador regressivo, que comece em 10.
// Use setInterval para diminuir o número exibido a cada segundo até chegar a zero.
// Quando o contador chegar a zero, exiba uma mensagem "Tempo esgotado!" no lugar do número e pare o intervalo.

const cont = document.getElementById('contador');
let i = 10;

const contagemRegressiva = setInterval(() => {
  cont.innerText = i--;
  if (i === 0) {
    cont.innerText = 'Tempo esgotado!'
    clearInterval(contagemRegressiva)
  }
}, 300)

