// Exercício 5: Simulação de Carregamento
// Crie um <div> com a palavra "Carregando..." e um botão "Iniciar Carregamento".
// Ao clicar no botão, use setInterval para alternar o texto no <div> entre "Carregando." e "Carregando..." a cada 300 milissegundos, simulando uma animação de carregamento.
// Após 3 segundos, interrompa o intervalo e substitua o texto "Carregamento completo!".
// Esses exercícios permitem prática com setTimeout e setInterval junto com manipulação de elementos DOM, oferecendo uma boa base para desenvolver dinamismo nas páginas.

const loading = document.getElementById("loading");
const btn = document.getElementById("btn");
let interval = true;
let intervalId;

btn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    loading.innerText = interval ? "Carregando." : "Carregando...";
    interval = !interval;
  }, 300);
});

setTimeout(() => {
  clearInterval(intervalId);
  loading.innerText = 'Carregamento completo';
}, 3000);
