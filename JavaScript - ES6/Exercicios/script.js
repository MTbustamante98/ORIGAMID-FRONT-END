// const data = document.querySelector('button')

// function clicar() {
//   const div = document.querySelector('div')
//   div.innerHTML = Date()
//   div.style.marginTop = '10px'
// }

// data.addEventListener('click', clicar)

// Declare variáveis de diferentes tipos e imprima seus valores.
// let number1 = 10
// console.log(number1)

// let sereiProgamadorAlgumDia = true;
// console.log(sereiProgamadorAlgumDia)

// let comidaFavorita = 'Strogonoff'
// console.log(comidaFavorita)
// console.log(typeof comidaFavorita)

// // Converta entre diferentes tipos de dados (ex.: string para número).
// let frase = +'100'

// console.log(frase)

// let idade = +'25';
// console.log(idade)
// // Crie um script que peça ao usuário dois números e exiba a soma deles.
// let numero1 = 20;
// let numero2 = 550;

// let soma = numero1 + numero2
// console.log(soma);


const picBulb = document.querySelectorAll('button');

function pic() {
  const bulbon = document.getElementById('myImage')
  bulbon.src = 'img/bulboff.gif'
  this.nextElementSibling.src = 'img/bulbon.gif'
}

picBulb.forEach((itens) => {
  itens.addEventListener('click', pic);
})

const secoes = document.querySelectorAll('.secao');

secoes.forEach((item) => {
  item.style.backgroundColor = `red`
})

//------------------------------------//  

const UlLista = document.querySelector('.item-list');

for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement('li')
  listItem.textContent = `Item ${i}`;
  UlLista.appendChild(listItem)
  UlLista.style.listStyleType = 'none'
}

let number = 7;
let even = (number % 2 === 0) ? 'É par' : 'Não é par';
console.log(even)

let idade = 18;
let MaiorOuMenor = (idade >= 18) ? 'maior de idade!' : 'menor de idade';
console.log(`A pessoa é ${MaiorOuMenor}`)

let nota = 10;
let aprovacao = (nota >= 6) ? 'aprovado' : 'reprovado'
console.log(`O aluno está ${aprovacao}`);

const grade = 90;
const gradeCategory = (grade >= 90) ? 'A' :
(grade >= 80) ? 'B' :
(grade >= 70) ? 'C' :
(grade >= 60) ? 'D' : 'F';

console.log(`A nota é ${grade} e o conceito é ${gradeCategory}.`)