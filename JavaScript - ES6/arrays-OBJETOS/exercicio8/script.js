// Exercício 10: Verificar Se Todos os Números São Positivos
// Objetivo: Usar o método every() para verificar se todos os números de um array são positivos.

// Instruções:

// Crie um array chamado numerosVerificacao contendo: 3, 5, 8, -1, 12, 7, 9.
// Usando o método every(), verifique se todos os números são positivos.
// Exiba o resultado (verdadeiro ou falso) dentro de um elemento <p> no DOM.

const numerosVerificacao = [3, 5, 8, -1, 12, 7, 9];
const para = document.querySelector('p');

const numeroPositivo = numerosVerificacao.every(valor => valor > 0);
para.innerText = `Todos os números são positivos? ${numeroPositivo}`