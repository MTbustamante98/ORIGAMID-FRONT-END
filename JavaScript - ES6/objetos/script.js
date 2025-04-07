// // let pessoa = {
// //   nome: 'Matheus',
// //   idade: 25,
// //   profissao: 'Repositor',
// //   possuiFaculdade: false,
// // }

// // console.log(pessoa)

// // let menu = {
// //   width: 800,
// //   height: 50,
// //   backgroundColor: '#84E',
// // }

// // menu.backgroundColor = '#EB21'
// // menu.color = 'red'
// // console.log(menu)

// // // let height = 120;
// // // let menu2 = {
// // //   width: 800,
// // //   height: 50,
// // //   metadeHeight() {
// // //     return this.height / 2;
// // //   }
// // // }

// // // menu.metadeHeight()


// //----------------------------------//
// // Crie um objeto com os seus dados pessoais
// // Deve possui pelo menos duas propriedades nome e sobrenome
// const pessoa = {
//   nome: 'Matheus',
//   sobrenome: 'Bustamante',
//   idade: 25,
// }
// // Crie um método no objeto anterior, que mostre o seu nome completo

// pessoa.nomeCompleto = function() {
// return `${this.nome} ${this.sobrenome}`
// }

// console.log(pessoa.nomeCompleto())

// // Modifique o valor da propriedade preco para 3000
// var carro = {
//   preco: 1000,
//   portas: 4,
//   marca: 'Audi',
// }

// carro.preco = 3000;
// console.log(carro)
// // Crie um objeto de um cachorro que represente um labrador,
// // preto com 10 anos, que late ao ver um homem
// const cachorro = {
//   nomeRaca: 'Labrador',
//   cor: 'Preto',
//   idade: 10,
// }

//--------------------------------------//

// const pessoa2 = {
//   nome: ["Bob", "Smith"],
//   idade: 32,
//   sexo: "masculino",
//   interesses: ["música", "esquiar"],
//   bio: function() {
//     alert(
//       this.nome[0] +
//       " " + 
//       this.nome[1] +
//       " tem " +
//       this.idade +
//       " anos de idade. Ele gosta de " + this.interesses[0] + 
//       " e " +
//       this.interesses[1] + 
//       " .",
//     );
//   }
// }

// pessoa2["nome"]["ultimo"] = "Cratchit"

// const cat = {
//   name : 'Bertie',
//   breed : 'Cymric',
//   color : 'white',
//   greeting: function() {
//     console.log('Meow!');
//   }
// }

// cat.greeting()
// cat.color = 'Black'
// cat["name"]["catName"] = "Ola";

// let para1 = document.createElement('p')
// let para2 = document.createElement('p')

// para1.textContent = `The cat's name is ${cat.catName}.`
// para2.textContent = `The cat's color is ${cat.color}`

// document.body.appendChild(para1)
// document.body.appendChild(para2)

const TimeClube = {
  nome : 'Sport Club Internacional',
  cores: 'Vermelho e Branco',
  nacionalidade : 'Brasil',
  genero : 'Futebol',
  torcida : '+ 6 milhões',
  fundacao : 1909,
  status : true,
  titulosImportantes : ['Libertadores', 'Mundial', 'Brasileiro'],
  anoTituloImportante : [2006, 2010, 1979],
  biografiaClube : 'O Sport Club Internacional mais conhecido como Internacional, e popularmente pelos apelidos de Colorado e Inter de Porto Alegre, é um clube multidesportivo brasileiro com sede na cidade de Porto Alegre, capital do Rio Grande do Sul. Foi fundado em 4 de abril de 1909 pelos irmãos Poppe, com o objetivo de ser uma instituição democrática e sem preconceitos.',
};

console.log(TimeClube)

let para = document.createElement('p')

para.textContent = `${TimeClube.biografiaClube}`

document.body.appendChild(para)