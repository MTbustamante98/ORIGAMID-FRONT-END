// Exercício 4: Animação de Texto
// Crie um <h1> com o texto "Animação de Texto".
// Use setInterval para alternar a cor do texto entre azul e verde a cada 500 milissegundos.
// Após 5 segundos, pare a animação, deixando a cor final como azul.

const title = document.getElementById('titulo');
let isBlue = true;

const interval = setInterval(() => {
  title.style.color = isBlue ? "blue" : "green";
  isBlue = !isBlue;
}, 500);

setTimeout(() => {
  clearInterval(interval);
  title.style.color = 'blue';
}, 5000);