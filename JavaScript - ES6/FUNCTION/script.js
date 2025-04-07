const carro = {
  marca: 'Ford',
  ano: 2018,
}

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro.call(carro);

const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['Melancia', 'Laranja', 'Uva'];
carros.forEach(item => {
  console.log(item);
})// Log de cada carro

carros.forEach.call(carros, (item) => {
  console.log(item);
})// Log de cada carro

carros.forEach.call(frutas, (item) => {
  console.log(item);
})// Log de cada carro

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
}

const li = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativar');

// const lista = new Dom('ul');
// lista.ativo('ativar');
// console.log(lista)