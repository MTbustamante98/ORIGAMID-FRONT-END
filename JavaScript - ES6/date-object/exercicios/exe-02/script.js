// Exercício 2: Contagem Regressiva para o Ano Novo
// Descrição: Exiba uma contagem regressiva para o Ano Novo. A contagem deve ser atualizada a cada segundo, mostrando o tempo restante em dias, horas, minutos e segundos.

// Passos:

// Crie uma div para exibir a contagem regressiva.
// Em JavaScript, defina a data do próximo Ano Novo e, usando o setInterval, atualize a contagem a cada segundo.

function updateCountdown() {
const divCount = document.getElementById('count');
const agora =  new Date();
const anoNovo = new Date(agora.getFullYear() + 1, 0 , 1);
const diff = anoNovo - agora;

const days = MathFloor(diff / (1000 * 60 * 60 * 24));
const hours = MathFloor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = MathFloor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60));
const seconds = MathFloor((diff % (1000 * 60 * 60 * 24)) / 1000);

divCount.innerText = `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(updateCountdown, 1000)