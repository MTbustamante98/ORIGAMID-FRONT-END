//Exercício 1: Verificar número máximo - Descrição: Crie um campo de input onde o usuário pode inserir três números. Ao clicar em um botão, exiba na tela o maior número usando o método Math.max().

const inputN1 = document.getElementById('num1');
const inputN2 = document.getElementById('num2');
const inputN3 = document.getElementById('num3');
const btn = document.querySelector('button');
const resultado = document.getElementById('resultado');
function maiorNumero() {
  const number1 = Number(inputN1.value);
  const number2 = Number(inputN2.value);
  const number3 = Number(inputN3.value);
  const retornaMaior = Math.max(number1, number2, number3);
  resultado.innerText = `Maior número retornado: ${retornaMaior}`
}

btn.addEventListener('click', maiorNumero);