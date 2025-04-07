// Exercício 4: Método bind() com eventos de clique
// Crie uma função chamada mostrarMensagem que exibe uma mensagem no console ao clicar em um botão. Use o método bind() para vincular diferentes mensagens ao mesmo evento de clique em múltiplos botões.

function mostrarMensagem(mensagem) {
  console.log(mensagem)
}

const botao1 = document.getElementById('btn1');
const botao2 = document.getElementById('btn2');

const mensagemBtn1 = mostrarMensagem.bind(null, "Você clicou no botão 1!");
const mensagemBtn2 = mostrarMensagem.bind(null, "Você clicou no botão 2!");


botao1.addEventListener('click', mensagemBtn1);

botao2.addEventListener('click', mensagemBtn2);
