class EstiloElemento {
  constructor(seletor) {
    this.elemento = document.querySelector(seletor);
  }

  get background() {
    return window.getComputedStyle(this.elemento).backgroundColor;
  }

  set background(newBackgroundElement) {
    this.elemento.style.backgroundColor = newBackgroundElement;
  }

}

const elemento = new EstiloElemento('#caixaEstilo');
const btn = document.querySelector('#alterarCor');
const inputColor = document.querySelector('#corEscolhida');

btn.addEventListener('click', () => {
  elemento.background = inputColor.value;
})
