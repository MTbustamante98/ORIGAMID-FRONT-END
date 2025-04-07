// Exercício 2: Método call() com botões
// Crie uma função chamada mudarTexto que altera o texto de um botão. Utilize o método call() para alterar o texto de vários botões ao mesmo tempo, passando o botão como contexto.

function mudarTexto(texto) {
  this.textContent = texto;
}

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

mudarTexto.call(btn1, "Novo texto 1");
mudarTexto.call(btn2, "Novo texto 2");