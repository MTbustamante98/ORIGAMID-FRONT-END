const botaoVermelho = document.querySelector('.vermelho');
const botaoVerde = document.querySelector('.verde');
const botaoAzul = document.querySelector('.azul');

function bgColor() {
  document.body.style.backgroundColor = 'red';
}
function bgColor2() {
  document.body.style.backgroundColor = 'green';
}
function bgColor3() {
  document.body.style.backgroundColor = 'blue';
}

botaoVermelho.addEventListener('click', bgColor);
botaoVerde.addEventListener('click', bgColor2);
botaoAzul.addEventListener('click', bgColor3);