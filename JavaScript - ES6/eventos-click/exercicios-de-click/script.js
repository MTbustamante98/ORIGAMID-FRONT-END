const botao1 = document.querySelector('.btn');
let para1 = document.querySelector('.contador');
contador = 0;
function incrementar() {
  contador++
  para1.textContent = contador;
}

botao1.addEventListener('click', incrementar);