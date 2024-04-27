function livro(nome, ano, autor) {
  const objeto = {
    nome: nome.toUpperCase(),
    totalAnos: 2024 - ano,
    frase: nome + ' por ' + autor,
  };
  return objeto;
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(livroRetorno.frase)


