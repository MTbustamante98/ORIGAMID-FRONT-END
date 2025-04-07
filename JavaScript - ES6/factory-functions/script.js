// function createButton(text) {
//   function element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }

//   return {
//     text,
//     element
//   }
// }
// const btnBlue = createButton('Comprar');

// function criarPessoa(nome, sobrenome) {
//   const nomeCompleto = `${nome} ${sobrenome}`;

//   function andar() {
//     return `${nomeCompleto} andou`;
//   }
//   function nadar() {
//     return `${nomeCompleto} nadou`;
//   }
//   return {
//     nome,
//     sobrenome,
//     andar,
//     nadar,
//   }
// }

// const designer = criarPessoa('André', 'Rafael');

// 'use strict';

// function criarPessoa(nome, sobrenome) {
//   const nomeCompleto = `${nome} ${sobrenome}`;
//   function andar() {
//     return `${nomeCompleto} andou`;
//   }
//   return Object.freeze({
//     nome,
//     sobrenome,
//     andar,
//   });
// }

// const designer = criarPessoa('André', 'Rafael');

// function Pessoa(nome) {
//   if (!(this instanceof Pessoa)) // ou (!new.target)
//     return new Pessoa(nome);
//   this.nome = nome;
// }

// Pessoa.prototype.andar = function() {
//   return `${this.nome} andou`;
// }

// const designer = Pessoa('André');

function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    });
    return $$(selectedElements);
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    });
    return $$(selectedElements);
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    });
    return $$(selectedElements);
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    });
    return $$(selectedElements);
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className);
    });
    return $$(selectedElements);
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  }
}

const btns = $$('button');
console.log(btns.hide().show())

function handleClick(event) {
  console.log(event.target)
}

btns.on('click', handleClick);
btns.addClass('active');