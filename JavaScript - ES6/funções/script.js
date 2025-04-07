function soma(a, b) {
  return a + b;
}

let resultado = soma(3, 4);
console.log(resultado)

function areaQuadrado(lado) {
  return lado * lado;
}

let area1 = areaQuadrado(4)
console.log(area1)

function imc(peso, altura) { //parametros
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(77, 1.78)) // argumentos

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}

console.log(corFavorita());

// function terceiraIdade(idade) {
//   if(typeof idade !== 'number') {
//     return 'Informe a sua idade!';
//   } else if(idade >= 60) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(terceiraIdade(18))

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    console.log('Informe sua idade!')
  } else if(idade >= 60) {
    console.log('Você é idoso!')
  } else if(idade < 60) {
    console.log('Você não é idoso!')
  } else if(idade < 0) {
    console.log('Número inválido!')
  }
    
}

console.log(terceiraIdade(0))

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro


//--------------------------------------------------//

// Crie uma função para verificar se um valor é Truthy
function valorTrue(valor) {
  return !!valor
}
console.log(valorTrue('matheus'))
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  return lado * 4
}

console.log(perimetro())

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobreNome) {
  return `${nome} ${sobreNome}`
}

console.log(nomeCompleto('Matheus', 'Bustamante'))
// Crie uma função que verifica se um número é par
function even(numero) {
  let par = numero % 2
    if(par === 0) {
      return 'É par!'
    } else {
      return 'É ímpar!'
    }
}

console.log(even(2))
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function string(nome) {
  return typeof nome;
}

console.log(string(true))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', () => {
  console.log('Matheus Bustamante')
})


//Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
console.log(precisoVisitar(20));


let frase = 16 + 'Volvo'
console.log(frase)

let x;

x = 5
console.log(x)

x = 'Jhon'
console.log(x)

// Exercício 1: Soma de Dois Números (Fácil)
// Escreva uma função chamada soma que aceite dois números como argumentos e retorne a soma deles.

function soma(numero1, numero2) {
  return numero1 + numero2
}

console.log(soma(5, 5))
console.log(soma(-2, 4))

// Exercício 2: Verificação de Par ou Ímpar (Fácil)
// Crie uma função chamada ehPar que aceite um número como argumento e retorne true se o número for par e false se for ímpar.

function ehPar(numero) {
  return numero % 2 === 0;
}
console.log(ehPar(0))


function contarVogais(texto) {
  const vogais = 'aeiouAEIOU';
  let contador = 0;
  for (let char of texto) {
    if(vogais.includes(char)) {
      contador++
    }
  }
  return contador;
}

console.log(contarVogais('Hello World')); 