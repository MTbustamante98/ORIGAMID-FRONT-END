// Exercício 5: Função como valor de retorno com mudança de estilos
// Crie uma função chamada criarAlteradorDeCor que recebe uma cor como parâmetro e retorna uma nova função que altera a cor de fundo de um elemento do DOM. Use a função retornada para alterar a cor de fundo de diferentes divs.

function criarAlteradorDeCor(cor) {
  return function(elemento) {
    elemento.style.backgroundColor = cor;
  }
}


const alterarCor1 = criarAlteradorDeCor('red');
const alterarCor2 = criarAlteradorDeCor('#d56');

const div1 = document.getElementById('box1');
const div2 = document.getElementById('box2');

alterarCor1(div1);
alterarCor2(div2);