// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragraph = document.querySelectorAll('section p');


const totalCaracteres = Array.prototype.reduce.call(paragraph, (acumulador, atual) => {
  return acumulador + atual.innerText.length;
}, 0);
console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}
console.log(criarElemento('ul', 'ativar', 'Esse é o conteúdo'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const H1titulo = criarElemento.bind(null, 'h1', 'titulo');

console.log(H1titulo('Cursos de JavaScript'))