// let randomNumber = Math.floor(Math.random() * 100) + 1;

// const guesses = document.querySelector(".guesses");
// const lastResult = document.querySelector(".lastResult");
// const lowOrHi = document.querySelector(".lowOrHi");

// const guessSubmit = document.querySelector(".guessSubmit");
// const guessField = document.querySelector(".guessField");

// let guessCount = 1;
// let resetButton;

let randomNumber = Math.floor(Math.random() * 100) + 1;

const palpites = document.querySelector(".palpites");
const ultimoResultado = document.querySelector(".ultimoResultado");
const baixoOuAlto = document.querySelector(".baixoOuAlto");

const envioPalpite = document.querySelector(".envioPalpite");
const campoPalpite = document.querySelector(".campoPalpite");

//armazenar a contagem e palpites do usuário
let contagemPalpites = 1;
let botaoReinicio;

function checkguess() {
  const palpiteUsuario = Number(campoPalpite.value);
  if(contagemPalpites === 1) {
    palpites.textContent = "Previous guesses";
  }
  guesses.textContent = `${palpites.textContent} ${palpiteUsuario}`;
  
  if(palpiteUsuario === randomNumber) {
    ultimoResultado.textContent = "Congratulations! You got it right!";
    ultimoResultado.style.backgroundColor = "green";
    baixoOuAlto.textContent = "";
    setGameOver();
  } else if (contagemPalpites === 10) {
    ultimoResultado.textContent = "!!!GAME OVER!!!";
    baixoOuAlto.textContent = "";
    setGameOver();
  } else {
    ultimoResultado.textContent = "Wrong!";
    ultimoResultado.style.backgroundColor = "red";
    if(palpiteUsuario < randomNumber) {
      baixoOuAlto.textContent = 'Last guess was too low!'
    } else if (userGuess > randomNumber) {
      baixoOuAlto.textContent = 'Last guess was too high!'
    }
  }

  envioPalpite++;
  campoPalpite.value = "";
  campoPalpite.focus();
}
