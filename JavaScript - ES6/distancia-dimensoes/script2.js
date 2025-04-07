const container = document.querySelector('.div');
const btn = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

function aumentarTamanho() {
  const width = container.offsetWidth * 1.2;
  const height = container.offsetHeight * 1.2;
  container.style.width = width + 'px';
  box.style.height = height + 'px';
}

function diminuirTamanho() {
const width = container.offsetWidth * 0.8;
const height = container.offsetHeight * 0.8;
container.style.width = width + 'px';
box.style.height = height + 'px';
}

btn.addEventListener('click', aumentarTamanho);
btn2.addEventListener('click', diminuirTamanho);

diminuirTamanho();