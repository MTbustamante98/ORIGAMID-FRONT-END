// Exercício 8: Remover Elementos de um Array
// Objetivo: Usar o método splice() para remover elementos de um array e exibir o resultado no DOM.

// Instruções:

// Crie um array chamado animais contendo: "Cão", "Gato", "Pássaro", "Peixe", "Tartaruga".
// Remova os elementos "Pássaro" e "Peixe" do array usando o método splice().
// Exiba o array modificado dentro de um parágrafo no DOM.

const animais = ['Cão', 'Gato', 'Passáro', 'Peixe', 'Tartaruga'];
const message = document.querySelector('p');

animais.splice(2, 2);
message.innerText = animais.join(', '); 