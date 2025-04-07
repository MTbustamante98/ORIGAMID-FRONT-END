// function teste(soma) {
//   return 1 + 1;
// }

// function pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }

// const pessoa1 = new pessoa('Matheus, 25');
// console.log(pessoa1);

const cidade = new String('rio grande do sul');

const lista = document.querySelectorAll('li');

const listaArray = Array.prototype.slice.call(lista)

console.log(listaArray)

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function() {
  return this.nome + this.sobrenome
}

const Matheus = new Pessoas('Matheus', ' Bustamante')

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

//NodeList
// entries();
// forEach();
// keys();

//HTMLCollection
// item();
// namedItem();

//Document
// append();
// hasFocus();
// clear();