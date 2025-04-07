class ElementoTexto {
  constructor(seletor) {
    this.elemento = document.querySelector(seletor);
  }

  get texto() {
    return this.elemento.innerText;
  }

  set texto(novoTexto) {
    this.elemento.innerText = novoTexto;
  }
}

const elemento = new ElementoTexto('#meuTexto');
const btn = document.querySelector('#btnAlterarTexto');

btn.addEventListener('click', () => {
  elemento.texto = "Texto alterado!"
});