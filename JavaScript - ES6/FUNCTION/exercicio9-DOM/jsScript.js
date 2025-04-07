// Exercício 3: Método apply() com elementos de input
// Crie uma função chamada preencherInput que preenche o valor de um campo de input. Use o método apply() para passar um array de valores e aplicar a função em diferentes inputs.

function preencherInput(valor) {
  this.value = valor;
}

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

preencherInput.apply(input1, ["Valor do input 1"]);
preencherInput.apply(input2, ["Valor do input 2"]);