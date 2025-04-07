let alterarTexto = document.getElementById('texto')

function clicar() {
  let newText = document.querySelector('h1')
  newText.innerText = 'Novo Texto'
  newText.classList.toggle('ativo')
}

alterarTexto.addEventListener('click', clicar);

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit - 32);
}

let text = 'The temperature is ' + toCelsius(77) + ' Celsius';
console.log(text)

document.addEventListener('DOMContentLoaded', function() {
let select = document.querySelector('select');
let para = document.querySelector('p');

let temperatura = 27;

function selecioneClima() {
  let escolha = select.value;

  if(escolha === 'ensolarado' && temperatura >= 26 && temperatura <= 30) {
    // para.textContent = 'Hoje está bom e ensolarado lá fora. Use shorts! Vá à praia ou ao parque e tome um sorvete.'
        para.textContent = 'É ' + temperatura + ' graus lá fora, agradável e ensolarado. Vamos à praia ou ao parque e tomar um sorvete.' 

  } else if(escolha === 'chuvoso') {
    para.textContent = 'A chuva está caindo lá fora; leve uma capa de chuva e um guarda-chuva e não fique fora por muito tempo.'
  } else if (escolha === 'nevando') {
    para.textContent = 'A neve está caindo – está congelando! Melhor ficar em casa com uma xícara de chocolate quente ou construir um boneco de neve'
  } else if (escolha === 'nublado') {
    para.textContent = 'Não está chovendo, mas o céu está cinzento e sombrio; pode mudar a qualquer minuto, então leve uma capa de chuva para garantir.'
  } else {
    para.textContent = ""
  }
}

select.addEventListener('change', selecioneClima);
})