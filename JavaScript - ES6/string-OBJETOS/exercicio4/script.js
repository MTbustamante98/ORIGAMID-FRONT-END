const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.querySelector('button');
const message = document.querySelector('.para')

function verificarPalavra() {
  const texto = input1.value.toLowerCase();
  const palavra = input2.value.toLowerCase();
  const contemPalavra = texto.includes(palavra)
  if(contemPalavra) {
    message.innerText = 'Palavra encontrada'
    message.style.color = 'green'
  } else {
    message.innerText = 'Palavra não encontrada'
    message.style.color = 'red'
  }
}

btn.addEventListener('click', verificarPalavra)