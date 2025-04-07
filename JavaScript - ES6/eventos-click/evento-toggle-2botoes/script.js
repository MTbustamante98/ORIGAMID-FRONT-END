document.addEventListener("DOMContentLoaded", (event) => {
  const btn = document.querySelector(".botao");
  const input = document.getElementById("inputText");
  function Click() {
    input.disable = !input.disable
  }

  btn.addEventListener("click", Click);
});
