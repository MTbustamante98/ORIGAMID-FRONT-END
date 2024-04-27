function livro(nome, ano, autor) {
  const objeto = {
    nome: nome.toUpperCase(),
    totalAnos: 2024 - ano,
    frase: nome + ' por ' + autor,
  }
  return objeto;
}

const livroRetorno = livro("The Guardian", 1930, "Sheldon M.")
console.log(livroRetorno.frase)

function clube(nome, divisao, ano) {
  console.log(nome, divisao, ano)
  const objeto = {
    nome: nome.toUpperCase(),
    divisaoclub: divisao,
    anoclub: ano,
  };

  return objeto;
}

const clubeRetorno = clube('Internacional', '1ª', 1909)
console.log(clubeRetorno)
