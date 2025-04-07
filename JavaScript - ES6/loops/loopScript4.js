const input = document.querySelector('input');
const btn = document.querySelector('button');
const para = document.querySelector('p');
para.innerHTML = "";

  function check() {
    const number = Number.parseInt(input.value)
    if(isNaN(number)) {
      para.textContent = "Por favor, digite um número.";
      return;
    }

    let tabela = "";
    for(let i = 1; i <= 10; i++) {
      tabela += `${number} x ${i} = ${number * i}\n`;
    }

    para.textContent = tabela;
}

btn.addEventListener('click', check)