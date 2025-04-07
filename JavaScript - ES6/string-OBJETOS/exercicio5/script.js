const frase = document.getElementById('input1');
const palavra = document.getElementById('palavra');
const novaPalavra = document.getElementById('substituir');
const btn = document.querySelector('button');
const message = document.querySelector('.para')

function substituirPalavra() {
  const fraseDigitada = frase.value.toLowerCase();
  const palavraAntiga = palavra.value;
  const palavraNova = novaPalavra.value;
  const replace = fraseDigitada.replace(palavraAntiga, palavraNova);
  message.innerText = replace;
}

btn.addEventListener('click', substituirPalavra);