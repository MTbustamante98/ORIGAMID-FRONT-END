// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const paragraphRetorno = document.getElementById("retorno");

function retornoValor() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((body) => {
      paragraphRetorno.innerHTML = "Valor de compra do BTC em reais: " + 'R$ ' + body.BRL.buy;
    });
}

// setInterval(retornoValor, 30000)

retornoValor();
