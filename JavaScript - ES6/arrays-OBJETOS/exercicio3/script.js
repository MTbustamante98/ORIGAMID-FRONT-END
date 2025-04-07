document.addEventListener('DOMContentLoaded', (event) => {
const listaCores = ['red', 'green', 'blue', 'yellow', 'purple'];
const divBotoes = document.querySelector('div');

listaCores.forEach(cor => {
  let btn = document.createElement('button');
  btn.innerText = cor;
  btn.style.margin = '5px';
  btn.addEventListener('click', () => {
    document.body.style.backgroundColor = cor;
  });
  divBotoes.appendChild(btn);
});
});