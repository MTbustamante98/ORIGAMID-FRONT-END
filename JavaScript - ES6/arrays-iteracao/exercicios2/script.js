//Exercício 2: Filtrar e Exibir Números Pares
//Objetivo: Criar um array de números, filtrar os números pares e exibi-los no DOM.

//Instruções:

//Crie um array chamado numeros contendo os números de 1 a 10.
//Filtre os números pares do array usando o método filter.
//Exiba os números pares filtrados dentro de um parágrafo (<p>) no DOM.

const message = document.querySelector('p');
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const numeroPar = arrayNumeros.filter(x => x % 2 === 0);
  message.innerText = `Números pares filtrados: ${numeroPar.join(', ')}`



