document.addEventListener("DOMContentLoaded", (event) => {
  const btnAdd = document.querySelector(".botao");
  const btnRemove = document.querySelector(".botao2");
  const lista = document.querySelector("ul");
  function addClick() {
    let item = document.createElement("li");
    item.textContent = 'Novo item';
    lista.appendChild(item);
  }

  function removeClick() {
    if(lista.lastChild) {
      lista.removeChild(lista.lastChild);
    }
  }

  btnAdd.addEventListener("click", addClick);
  btnRemove.addEventListener("click", removeClick);
});
