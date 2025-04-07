// Exercício 1: Exibir uma Mensagem Após um Intervalo
// Crie um botão na página com o texto "Mostrar Mensagem".
// Ao clicar no botão, utilize setTimeout para exibir uma mensagem "Olá, essa é uma mensagem com delay!" após 3 segundos.
// Insira a mensagem em um elemento <div> abaixo do botão.

const btn = document.getElementById('btn');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
  setTimeout(() => {
    message.innerText = 'Olá, essa é uma mensagem com delay!" após 3 segundos.'
  }, 3000)
});