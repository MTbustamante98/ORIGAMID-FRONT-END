// const carro = {
//   marca: 'Marca',
//   preco: 0,
// }

// const honda = carro;
// honda.marca = 'Honda';
// honda.preco = 4000;

// const fiat = carro;
// fiat.marca = 'Fiat';
// fiat.preco = 3000;

// //usando o constructor function
// function Carro() {
//   this.marca = 'Marca';
//   this.preco = 0;
// }

//A palavra chave new é responsável por criar um novo objeto baseado na função.
// const volkswagen = new Carro();
// volkswagen.marca = 'Volkswagen';
// volkswagen.preco = 5000;
// const chevrolet = new Carro();
// chevrolet.marca = 'Chevrolet';
// chevrolet.preco = 6000;

// const toyota = new Carro();

// toyota = {}
// toyota.prototype = Carro.prototype

// this = toyota;

// toyota.marca = 'Marca';
// toyota.preco = 0;
// return toyota = {
//   marca: 'Marca',
//   preco = 0,
// }

function Time(nome, titulos, fundacao) {
  this.nome = nome;
  this.titulos = titulos;
  this.fundacao = fundacao;
}

const time1 = new Time('Internacional', 100, 1909);
const time2 = new Time('Flamengo', 150, 1895);

function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda = new Carro('Honda', 2000);

// //Exemplo real
// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor)
//   },
//   ativo() {
//     this.element().classList.add('ativo');
//   },
// }

// Dom.ativo();
// Dom.seletor = 'ul';
// Dom.ativo();

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(this.nome + ' andou');
  }
}

const pessoa1 = new Pessoa('João', 20);
const pessoa2 = new Pessoa('Maria', 25);
const pessoa3 = new Pessoa('Bruno', 15);
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function(classe) {
    elements.forEach(element => {
      element.classList.add(classe);
    })
  };
  this.removeClass = function(classe) {
    elements.forEach(element => {
      element.classList.remove(classe);
    })
  };
}

const listaItens = new Dom('li')
const ul = new Dom('ul');






