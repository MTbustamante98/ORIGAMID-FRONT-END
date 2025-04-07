// Exercício 9: Encontrar o Primeiro Número Maior que 50
// Objetivo: Usar o método find() para encontrar o primeiro número maior que 50 em um array.

// Instruções:

// Crie um array chamado numeros contendo os seguintes números: 45, 12, 78, 34, 23, 67, 89, 14.
// Usando o método find(), encontre o primeiro número maior que 50.
// Exiba o número encontrado dentro de um elemento <h3> no DOM.

const ArrayNumeros = [45, 12, 78, 34, 23, 67, 89, 14];
const tituloH3 = document.querySelector('h3');
const buscaMaior = ArrayNumeros.find(valor => valor > 50);

tituloH3.innerText = `Primeiro número maior que 50: ${buscaMaior}`;
