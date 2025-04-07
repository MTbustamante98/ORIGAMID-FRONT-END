// Exercício 7: Duplicar os Valores de um Array
// Objetivo: Usar o método map() para duplicar os valores de um array de números e exibi-los no DOM.

// Instruções:

// Crie um array chamado valores com os seguintes números: 5, 10, 15, 20, 25.
// Usando o método map(), crie um novo array onde cada valor seja duplicado.
// Exiba o array original e o array duplicado dentro de um parágrafo no DOM.

const valores = [5, 10, 15, 20, 25];
const message = document.querySelector('p');

const newValores = valores.map(item => item * 2)
message.innerHTML = `<p>Array de valores original: ${valores.join(' - ')}</p> <p>Array de valores duplicada: ${newValores.join(' - ')}</p>`