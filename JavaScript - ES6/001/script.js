const heading = document.querySelector('h1')

heading.textContent = 'Olá, mundo!'

let myVariable = ['Internacional', 'Palmeiras', 'Flamengo']

console.log(myVariable)

const objeto = {
  nome: 'Matheus',
  idade: 21,
  cidade: 'Porto Alegre',
}

console.log(objeto)

// const iceCream = false;

// if(iceCream === 'chocolate')
//   console.log('Adoro chocolate!')
// else if(iceCream === 'morango')
//   console.log('Adoro Morango!')
// else
//   console.log('Hum, morango com chocolate é o melhor!')

function multiply(num1, num2) {
  const result = num1 * num2
  return result;
}

multiply(5, 5)

function Carro(nomeAtribuido, marcaAtribuida, precoAtribuido) {
  this.nomeCarro = nomeAtribuido; 
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro('Honda FIT', 'Honda', 50000)
const fiat = new Carro('Argos', 'FIAT', 55000)
const toyota = new Carro('Etios', 'TOYOTA', 65000)
const hyundai = new Carro('HB20', 'HYUNDAI', 45000)

console.log()

const evento = document.querySelectorAll('li')
 console.log(evento)

function clickEvent(event) {
  this.classList.toggle('ativo')
}

evento.forEach((clicar) => {
  clicar.addEventListener('click', clickEvent)
})

