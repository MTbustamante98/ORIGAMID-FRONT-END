// Exercício 3: Alterar Cor de Fundo Periodicamente
// Crie um <div> quadrado (200x200 pixels) e centralize-o na página.
// Use setInterval para mudar a cor de fundo do quadrado a cada 2 segundos.
// Para interromper a mudança de cor após 10 segundos, utilize setTimeout para limpar o intervalo.

const mudarCorDiv = document.querySelector('.quadrado');

function mudarClasse() {
  mudarCorDiv.classList.toggle('active');
}

const interval = setInterval(mudarClasse, 2000);
setTimeout(() => {
  clearInterval(interval)
}, 10000);
