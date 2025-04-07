const cityInput = document.getElementById('city-input');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const humidity = document.getElementById('humidity');
const btn = document.querySelector('button');

function handleClick(event) {
  event.preventDefault();
  const cityValue = cityInput.value;

  dados(cityValue);
}

function dados(cityValue) {
  const apiKey = '846baef4664265886c6124d2786ff764';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}`

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Cidade não encontrada');
      }
      return response.json();
    })
    .then(body => {
      const kelvin = body.main.temp;
      const celsius = parseInt(kelvin - 273.15) + 'ºC';
      const humidityCondition = body.main.humidity;
      const condicao = body.
      weather[0].description;

      temperature.innerHTML = `Temperatura: ${celsius}`;
      condition.innerHTML = `Condição: ${condicao}`;
      humidity.innerHTML = `Umidade relativa: ${humidityCondition}` + '%';
    })
}

btn.addEventListener('click', handleClick);
