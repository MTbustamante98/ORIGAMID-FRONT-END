import initAnimaNumeros from './anima-numeros.js';

export default function initAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach(animal => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      if (typeof initAnimaNumeros === 'function') {
        initAnimaNumeros();
      } else {
        console.warn('initAnimaNumeros não está disponível')
      }
    } catch(erro) {
      console.log(erro)
    }
  }
  
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3>
    <span data-numero>${animal.total}</span>`
    return div;
  }

  fetchAnimais('./animaisapi.json');
}