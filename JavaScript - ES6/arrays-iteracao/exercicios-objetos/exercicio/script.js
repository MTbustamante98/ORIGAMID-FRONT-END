// Exercício 1: Listar Produtos em uma Loja Online
// Objetivo: Criar um array de objetos que representam produtos e exibir as informações de cada produto no DOM.

// Instruções:

// Crie um array chamado produtos, onde cada objeto representa um produto com as propriedades nome, preco, e disponivel (booleano).
// Use forEach() para iterar sobre o array e criar uma lista de produtos no DOM.
// Se o produto estiver disponível (disponivel: true), exiba "Disponível", caso contrário, exiba "Indisponível".

const listaProdutos = document.getElementById('lista-produtos');

const produtos = [
  {
    nome: 'Camisa branca',
    preco: 5.99,
    disponivel: false,
  },

  {
    nome: 'Camisa azul',
    preco: 10.99,
    disponivel: true,
  },

  {
    nome: 'Camisa vermelha',
    preco: 12.59,
    disponivel: false,
  },

  {
    nome: 'Calça',
    preco: 15.00,
    disponivel: true,
  },

  {
    nome: 'Tênis',
    preco: 20.00,
    disponivel: false,
  },
];

produtos.forEach(obj => {
  const listaLI = document.createElement('li');
  listaLI.innerText = `${obj.nome} - ${obj.preco} - ${obj.disponivel ? "Disponível" : "Indisponível"}`;
  listaProdutos.appendChild(listaLI)
})
