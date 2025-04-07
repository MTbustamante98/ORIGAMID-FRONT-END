//Exercício 3: Verificar se é um número inteiro - Descrição: Crie um campo de input para o usuário inserir um número. Use Number.isInteger() para verificar se o número é inteiro e exiba o resultado na tela.
document.addEventListener('DOMContentLoaded', (event) => {
const inputNumero = document.getElementById('verificarNumero');
const btn = document.querySelector('button');
const resultado = document.querySelector('p');

function numCheck() {
  const input = inputNumero.value.trim();

  if (input === '') {
    resultado.innerText = 'Por favor, insira um número.';
    resultado.style.color = 'orange';
    return;
  }

  const numero = Number(input)
  if (isNaN(numero)) {
    resultado.innerText = 'O valor inserido não é um número válido.';
    resultado.style.color = 'orange';
    return;
  }

  const verificarIntegral = Number.isInteger(numero);
  if (verificarIntegral) {
    resultado.innerText = 'O número é inteiro!';
    resultado.style.color = 'green'
  } else {
    resultado.innerText = 'O número não é inteiro';
    resultado.style.color = 'red';
  }
}

btn.addEventListener('click', () => {
  numCheck();
});

});