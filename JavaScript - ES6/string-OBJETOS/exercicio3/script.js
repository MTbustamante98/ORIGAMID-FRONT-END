const textarea = document.querySelector('textarea');
const btn = document.querySelector('button');
const message = document.querySelector('p span');

function contadorPalavras() {
  const letras = textarea.value.trim();
  const palavras = letras.split(/\s+/);
  const totalPalavras = letras ? palavras.length : 0;
  message.textContent = totalPalavras;
}

btn.addEventListener('click', contadorPalavras);