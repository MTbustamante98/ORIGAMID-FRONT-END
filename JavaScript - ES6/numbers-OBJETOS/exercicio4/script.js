//Exercício 4: Calcular a raiz quadrada - Descrição: Crie um campo de input onde o usuário pode inserir um número. Ao clicar em um botão, exiba na tela a raiz quadrada desse número usando Math.sqrt().

const input = document.getElementById('raizQ');
const btn = document.querySelector('button');
const resultado = document.querySelector('p');

function activeSQRT() {
  const raizSQRT = Number(input.value);
  
  const numero = Number(raizSQRT);
  if (isNaN(numero)) {
    resultado.innerText = 'O valor inserido não é um número válido!'
    resultado.style.color = 'red';
    return;
  }

  const calcularRaiz = Math.sqrt(numero).toFixed();
  if (raizSQRT === '') {
    resultado.innerText = 'Por favor, insira um número válido!'
    resultado.style.color = 'orange';
    return;
  } else {
    resultado.innerText = `A raiz quadrada do valor inserido é: ${calcularRaiz}`;
    resultado.style.color = 'green';
}
}
btn.addEventListener('click', () => {
  activeSQRT();
});