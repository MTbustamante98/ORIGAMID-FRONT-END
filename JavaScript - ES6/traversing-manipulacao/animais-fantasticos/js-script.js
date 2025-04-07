const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement);

console.log(lista.parentElement.parentElement);

console.log(lista.previousElementSibling);

console.log(lista.nextElementSibling);

console.log(lista.children[4])

console.log(lista.children[--lista.children.length])

lista.children.length

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista);
// contato.insertBefore(lista, titulo);
// contato.removeChild(titulo);
// contato.replaceChild(lista, titulo);

// const animais = document.querySelector('.animais');

// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo Título';
// novoH1.classList.add('titulo');

// animais.appendChild(novoH1)

const tema = document.querySelector('h1');
const tema2 = document.querySelector('h1');

const novoTema = tema;
const cloneTema = tema.cloneNode(true);
const contato2 = document.querySelector('.contato');
contato2.appendChild(cloneTema);

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');

const novoMenu = menu;
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector('.copy');
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const primeiroDT = document.querySelector('.faq-lista dt');
console.log(primeiroDT)

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDT.nextElementSibling
console.log(proximoDD)

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq')

faq.innerHTML = animais.innerHTML

