async function puxarDados() {
  const responseDados = fetch('./dados.json')
  const responseClientes = fetch('./dados.json')

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();
}

puxarDados();