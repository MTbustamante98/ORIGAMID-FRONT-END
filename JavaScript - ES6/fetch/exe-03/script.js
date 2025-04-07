// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btn = document.querySelector('button');
const paragraphRetorno = document.getElementById("retorno");

function piadaChuck() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(body => {
    retorno.innerText = body.value;
  })
}
piadaChuck()

btn.addEventListener('click', piadaChuck)