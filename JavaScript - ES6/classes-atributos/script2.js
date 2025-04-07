document.addEventListener('DOMContentLoaded', (event) => {
function botaoClick() {
const botao = document.querySelector('.div1 button');
const para = document.querySelector('.div1 p');

function clickButton() {
 if(para.classList.contains('ativo')) {
  para.classList.remove('ativo');
  para.textContent = 'Ao clicar no botão o parágrafo será modificado!'
 } else {
  para.classList.add('ativo');
  para.textContent = 'Texto modificado!'
 }
}

botao.addEventListener('click', clickButton);
}
botaoClick();

function modificarSRC() {
  const btn = document.querySelector('.div2 button');
  const img = document.querySelector('.div2 img');

  function modificarImg() {
    if(img.getAttribute('src') === 'img/inter.png') {
      img.setAttribute('src', 'img/inter2.png');
    } else {
      img.setAttribute('src', 'img/inter.png');
    }
  }

  btn.addEventListener('click', modificarImg);
}

modificarSRC();
});
