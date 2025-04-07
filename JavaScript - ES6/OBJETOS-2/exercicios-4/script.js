// Exercício 5: Iterando Sobre as Propriedades de um Objeto
// Enunciado:
// Crie um objeto livro com várias propriedades, como titulo, autor e ano. Adicione um botão que, ao ser clicado, itera sobre todas as propriedades do objeto e exibe cada uma delas e seu valor em uma lista no DOM.

// Instruções:

// Crie o objeto livro com pelo menos 3 propriedades.
// Insira um botão "Exibir Propriedades".
// Ao clicar no botão, cada propriedade e seu valor devem ser exibidos em uma lista (<ul>) no DOM.

const btn = document.querySelector('button');
const listaUL = document.querySelector('ul');

const livro = {
  titulo: 'Use a cabeça - Programação JavaScript',
  autor: 'Eric freeman e Elisabeth Robson',
  ano: 2016
};

function exibirInformacoes() {
  for(let propriedade in livro) {
    const lista = document.createElement('li');
    lista.innerText = `${propriedade}: ${livro[propriedade]}`;
    listaUL.appendChild(lista);
  };
};

btn.addEventListener('click', exibirInformacoes);