// let possuiFaculdade = false;

// if(possuiFaculdade) {
//   console.log('Possui faculdade')
// } else {
//   console.log('Não possui faculdade')
// }

let possuiGraduacao = false;
let possuiFaculdade = false;

if(possuiGraduacao && possuiFaculdade) {
  console.log('Possui graduação e Faculdade!')
} else if(possuiFaculdade) {
  console.log('Possui faculdade!')
} else if(possuiGraduacao) {
  console.log('Possui graduação!')
} else {
  console.log('Não possui os dois!')
}

let timeBrasileiro = 'inter';

switch (timeBrasileiro) {
  case 'Internacional', 'inter':
    console.log('Você é colorado');
    break;
  case 'Flamengo'.toLowerCase():
    console.log('Voce é flamenguista');
    break;
  case 'Palmeiras':
    console.log('Você é palmeirense');
    break;
  case 'São Paulo':
    console.log('Você é São Paulino');
    break;
  case 'Cruzeiro': 
    console.log('Você é cruzeirense');
    break;
  default:
    console.log('Torce para nenhum time, não gosta de futebol')
}

let cor = 'verde'

switch (cor) {
case 'Azul':
  console.log('Amo o céu!');
  break;
case 'Verde':
  console.log('Adoro a natureza!');
  break;
case 'Amarelo':
  console.log('Tenho apego ao Sol!');
  break;
case 'Vermelho':
  console.log('Eu adoro vermelho!');
  break;
default:
  console.log('Não gosto de cores');
}



// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 29;
let idadeParente = 30;

if(minhaIdade > idadeParente) {
  console.log('É maior!');
} else if(minhaIdade === idadeParente) {
  console.log('É igual!');
} else {
  console.log('É menor!')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - '') && (5 - 2);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome)
console.log(!!idade)
console.log(!!possuiDoutorado)
console.log(!!empregoFuturo)
console.log(!!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) 
  console.log('O brasil tem maior população!')
else 
  console.log('A china possui maior população')
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

let even = 1008
let par = even % 2;

if(par === 0) {
  console.log('O número é par!')
} else {
  console.log('O número é ímpar!')
}

//---------------------------------//

// if(!(iceCreamVanOutside || houseStatus === "on fire")) {
//   console.log("Provavelmente deveria ficar então.")
// } else {
//   console.log('Você deve sair de casa rapidamente.')
// }

//-----------------------------------//

let select = document.querySelector("select");
let html = document.querySelector("html");

document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function () {
  select.value === 'black'
  ? update('black', 'white')
  : update('white', 'black');
}