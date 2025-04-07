// Retorne no console todas as imagens do site
const images = document.querySelectorAll('img');
console.log(images)
// Retorne no console apenas as imagens que começaram com a palavra imagem
let imagens = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagens)
// Selecione todos os links internos (onde o href começa com #)
let links = document.querySelectorAll('a[href^="#"')
console.log(links)
// Selecione o primeiro h2 dentro de .animais-descricao
let primeiroh2 = document.querySelector('.animais-descricao h2');
console.log(primeiroh2)
// Selecione o último p do site
let ultimoP = document.querySelector('.copy p');
console.log(ultimoP)


// Verifique a distância da primeira imagem
// em relação ao topo da página
let distancia = document.querySelector('.animais-lista img')

console.log(distancia.offsetTop)
// Retorne a soma da largura de todas as imagens
function somaImagens() {
const img = document.querySelectorAll('img');
let soma = 0;
img.forEach(item => { 
 soma = soma + item.offsetWidth;
});
console.log(soma)
}

window.onload = function() {
  somaImagens();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
 const link = document.querySelectorAll('a')

link.forEach((itens) => {
  let dimensoes = itens.offsetHeight;
  let dimensoes2 = itens.offsetWidth;
  if(dimensoes >= 48 && dimensoes2 >= 48) {
    console.log(link, 'Possui acessibilidade');
  } else {
    console.log(link, 'Não possui acessibilidade')
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const small = window.matchMedia('(max-width: 720px)').matches;

if(small) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}

// // Quando o usuário clicar nos links internos do site,
// // adicione a classe ativo ao item clicado e remova dos
// // demais itens caso eles possuam a mesma. Previna
// // o comportamento padrão desses links
// const linksInternos = document.querySelectorAll('a[href^="#"]') 

// function links2(event) {
//   event.preventDefault();
//   linksInternos.forEach((item) => {
//     item.classList.remove('ativo')
//   });
//   this.classList.add('ativo');
// }

// linksInternos.forEach(link => {
//   link.addEventListener('click', links2)
// })

// // Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados
// const body = document.querySelectorAll('body *')

// function handleClick(event) {
//   console.log(event.currentTarget);
// }

// body.forEach(itens => {
//   itens.addEventListener('click', handleClick);
// })

// console.log(body)
// // Utilizando o código anterior, ao invés de mostrar no console,
// // remova o elemento que está sendo clicado, o método remove() remove um elemento

// // Se o usuário clicar na tecla (t), aumente todo o texto do site. 

// function fontSize(event) {
//   if(event.key === 't') {
//     document.documentElement.classList.toggle('textomaior')
//   }
// }


// window.addEventListener('keydown', fontSize);





// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const hyperligacao = document.querySelectorAll('a[href^="#"]');

function funcaoLink(event) {
  event.preventDefault();
  hyperligacao.forEach(link => {
    link.classList.remove('ativo');
  });
  this.classList.add('ativo');
}

hyperligacao.forEach(item => {
  item.addEventListener('click', funcaoLink)
});
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.querySelectorAll('body *');

function handleClick(event) {
  console.log(event.currentTarget)
}

body.forEach(evento => {
  evento.addEventListener('click', handleClick);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// const body2 = document.querySelectorAll('body *');

// function handleClick(event) {
//   event.currentTarget.remove()
// }

// body2.forEach(evento => {
//   evento.addEventListener('click', handleClick);
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function fontSize(event) {
  if(event.key === 't') {
    document.documentElement.classList.add('textomaior')
  }
}

window.addEventListener('keydown', fontSize);