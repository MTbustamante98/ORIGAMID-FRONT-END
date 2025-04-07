// Exercício 1: Propriedade length de funções com listas de elementos DOM
// Crie uma função chamada adicionarClasse que adiciona uma classe a todos os elementos de uma lista de itens (<li>). Exiba no console a quantidade de parâmetros que a função espera usando a propriedade length.

function Dom(adicionarClasse) {
  const lista = document.querySelectorAll('ul li');
  lista.forEach(item => item.classList.add(adicionarClasse));
}

console.log(Dom.length);
Dom('destacado');