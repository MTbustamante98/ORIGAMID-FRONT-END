let quadrado = {
  lados: 10,
  area(lado) {
    return lado * lado
  },
  perimetro(lado) {
    return this.lados * lado
  }
}

let height = 120;
let menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let informacoesPessoais = {
  nome: 'Matheus',
  sobrenome: 'Bustamante',
  idade: 25,
}
// Crie um método no objeto anterior, que mostre o seu nome completo
informacoesPessoais.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let dog = {
  cachorro: 'Labrador',
  cor: 'Preto',
  idade: 10,
    latir(pessoa) {
      if(pessoa === 'homem') {
        return 'O cachorro latiu!'
      } else {
        return 'o cachorro não latiu!'
      }
    }
}

let nome = 'Matheus'

nome.length;


// nomeie 3 propriedades ou métodos de strings
length;
toString;
charAt;
// nomeie 5 propriedades ou métodos de elementos do DOM
appendChild();
adoptNode();
createAttribute();
createElement();
createEvent();
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
