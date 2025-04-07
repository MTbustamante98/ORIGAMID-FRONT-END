//Exercício 2: Arredondar um número - Descrição: Crie um campo de input para o usuário inserir um número decimal. Ao clicar em um botão, exiba na tela o valor arredondado usando Math.round(), Math.ceil() e Math.floor().
const inputNumber = document.getElementById('numero');
const btn = document.querySelector('button');
const mathRound = document.getElementById('resultado');
const mathCeil = document.getElementById('resultado2');
const mathFloor = document.getElementById('resultado3');

function numDecimal() {
  const input = Number(inputNumber.value);

  const round = Math.round(input);
  mathRound.innerText = `Número integral próximo: ${round}`;

  const ceil = Math.ceil(input);
  mathCeil.innerText = `Número arredondado utilizando ceil: ${ceil}`;

  const floor = Math.floor(input);
  mathFloor.innerText = `Número arredondado utilizando floor: ${floor}`;
  
}

btn.addEventListener('click', () => {
  numDecimal();
});