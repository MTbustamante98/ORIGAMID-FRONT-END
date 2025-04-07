const botao = document.querySelector('.botao')

function somar() {
  const div = document.querySelector('div');
  const total = Number(div.innerText) + 1;
  div.innerText = total;
  if (total > 10) {
    div.innerText = total;
  } else {
    console.log("Não é possível adicionar mais");
  }
}

botao.addEventListener("click", somar);