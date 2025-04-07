document.addEventListener('DOMContentLoaded', (event) => {
const accordionList = document.querySelectorAll('.js-accordion dt');

function accordionClick(event) {
  accordionList.forEach(item => {
    if (item != this) {
      item.classList.remove('ativo');
      item.nextElementSibling.classList.remove('ativo')
    }
  });
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((item) => {
  item.addEventListener('click', accordionClick);
});

let faq = document.querySelector('.faq');
console.log(faq.clientHeight);
console.log(faq.offsetTop);
console.log(faq.offsetHeight);
console.log(faq.scrollHeight);
console.log(faq.offsetLeft);

let rect = faq.getBoundingClientRect();
console.log(rect)
});

let janela = window.innerWidth;
let janela2 = window.innerHeight;
let janela3 = window.outerHeight
let janela4 = console.log(window.pageYOffset)

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px')
}

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

//-------------------------------------------------------------------------------//
const container = document.querySelector('.divisao .div1');
const container2 = document.querySelector('.divisao .div2');
const btn = document.querySelector('.btn');
const para = document.querySelector('.para1');

function calculoDistancia() {
  const box1 = container.getBoundingClientRect();
  const box2 = container2.getBoundingClientRect();
  const distancia = Math.sqrt(Math.pow(box2.left - box1.left, 2) + Math.pow(box2.top - box1.top, 2));
  para.textContent = `Distância: ${distancia.toFixed(0)}px`;
}

btn.addEventListener('click', calculoDistancia);
