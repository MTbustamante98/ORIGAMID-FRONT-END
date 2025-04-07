// Exercício 4: Método bind()
// Crie uma função chamada saudacao que exibe uma mensagem de saudação. Utilize o método bind() para criar uma nova função chamada saudacaoUsuario que sempre mostre "Bem-vindo, usuário!", independente dos parâmetros passados.

function saudacao(nome) {
  console.log(`Bem-vindo, ${nome}!`);
}

const saudacaoUsuario = saudacao.bind(null, 'usuário');
saudacaoUsuario();
