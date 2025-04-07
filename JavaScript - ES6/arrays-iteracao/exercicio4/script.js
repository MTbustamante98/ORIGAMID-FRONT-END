// Exercício 6: Ordenar um Array de Números
// Objetivo: Criar um array de números desordenados e usar o método sort() para ordená-los em ordem crescente.

// Instruções:

// Crie um array chamado numerosDesordenados com os números: 23, 45, 12, 78, 34, 56, 90, 11.
// Use o método sort() para ordenar os números em ordem crescente.
// Exiba o array ordenado dentro de um parágrafo (<p>) no DOM.

const arrayDesordenados = ['23', '45', '12', '78', '34', '56', '90', '11'];
const message = document.querySelector('p');

const ordenar = arrayDesordenados.sort((a, b) => a - b);
message.innerText = `Números ordenados: ${ordenar.join(' - ')}`;

