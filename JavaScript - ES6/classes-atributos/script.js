// const menu = document.querySelector('.menu');
// const lista = document.querySelector('.lista')
// console.log(menu.className)
// console.log(lista.className)
// console.log(menu.classList)
// console.log(lista.classList)

// menu.className = 'ativar'
// menu.className += 'vermelho'

// function iteracao(event) {
//   event.target.classList.add('ativar', 'animacao');
// }

// menu.addEventListener('mouseenter', iteracao)

// const imagem = document.querySelector('img');
// console.log(imagem.getAttribute('src'));
// imagem.setAttribute('alt', 'Imagem escudo internacional')
// console.log(imagem.getAttribute('alt'))

// Adicione a classe ativo a todos os itens do menu
const ativo = document.querySelectorAll('.lista li');

ativo.forEach((item, index) => {
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
ativo.forEach(item => {
  item.classList.remove('ativo')
})

ativo[0].classList.add('ativo')
// Verifique se as imagens possuem o atributo alt
// let attribute = imagem.hasAttribute('alt');
// console.log(attribute)
// Modifique o href do link externo no menu
const href = document.querySelector('.lista a');

let link = href.setAttribute('href', 'https://www.google.com.br/?hl=pt-BR')


//--------------------------------------//
function classAdd() {
const btn = document.querySelector('.div button');
const para = document.querySelector('.div p')

function addClass() {
  para.classList.add('ativando')
}

btn.addEventListener('click', addClass);
};
classAdd();

function classToggle() {
const btn = document.querySelector('.div2 button');
const para = document.querySelector('.div2 p')

function addClass() {
  para.classList.toggle('alternando')
}

btn.addEventListener('click', addClass);
};
classToggle();

function attributeSRC() {
const btn = document.querySelector('.foto button');
const img = document.querySelector('.foto img')

function addClass(event) { 
    if(img.getAttribute('src') === 'img/inter.png') {
      img.setAttribute('src', 'img/inter2.png');
    } else {
      img.setAttribute('src', 'img/inter.png')
    }
}

btn.addEventListener('click', addClass);
};
attributeSRC();

function removeClass() {
const btn = document.querySelector('.div3 button');
const para2 = document.querySelector('.div3 p')

function addClass() { 
    para2.classList.remove('ativando')
}

btn.addEventListener('click', addClass);
};
removeClass();

function multiplasClasses() {
const btn = document.querySelector('.div4 button');
const para2 = document.querySelector('.div4 p')

function addClass() { 
  para2.classList.add('cor', 'fonte', 'borda');
}

btn.addEventListener('click', addClass);
};
multiplasClasses();