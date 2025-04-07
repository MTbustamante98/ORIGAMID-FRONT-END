// const numero = 2;
// const even = numero % 2;

// if(even === 0) {
//   console.log('O número é par');
// } else {
//   console.log('O número é ímpar');
// }
const number = document.querySelector('input');
const btn = document.querySelector('button');
const para = document.querySelector('p');

function even() {
  let parImpar = Number(number.value);
  let valor = parImpar % 2
    if(valor === 0) {
      para.textContent = `O número ${parImpar} é par!`
    }
    else if (isNaN(valor)) {
        para.textContent = 'Número inválido!'
    }
    else {
      para.textContent = `O número ${parImpar} é Ímpar!`
    } 
}

btn.addEventListener('click', even);
