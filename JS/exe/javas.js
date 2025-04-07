
function livro(nome, ano, autor) {
  const livro = {
    nomeMaior: nome.toUppercase(),
    totalAnos: 2024 - ano,
    frase: nome + ' por ' + autor,
  };

  return livro;
}

const livroRetorno = livro("O senhor dos anéis", 1954, 'J R. R. Tolkien')
console.log(livro.frase)