// Exercício 1: Gerenciador de Cards Interativos
// Descrição: Crie uma constructor function chamada CardCreator que receba um título, uma descrição e uma cor de fundo como parâmetros. A função deve criar um card (<div>) que contém um título (<h2>) e uma descrição (<p>) com o estilo de cor de fundo especificado. Adicione o card ao corpo do documento e inclua um botão "Remover" que, ao ser clicado, remove o card da página.

function CardCreator(titulo, descricao, bgColor) {
  this.div = document.createElement('div');
  this.div.style.backgroundColor = bgColor;
  this.div.style.padding = '20px'

  const tituloH2 = document.createElement('h2');
  tituloH2.textContent = titulo;
  this.div.appendChild(tituloH2);

  const paragraph = document.createElement('p');
  paragraph.textContent = descricao;
  this.div.appendChild(paragraph);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remover';
  this.div.appendChild(removeButton);

  removeButton.addEventListener('click', () => {
    this.div.remove()
  })

  document.body.appendChild(this.div);
}

const div = new CardCreator('Novo título', 'Este paragráfo é uma descrição da div!', '#e21');

// Exercício 2: Contador de Cliques
// Descrição: Crie uma constructor function chamada ClickCounter que crie um botão na página. Toda vez que o botão for clicado, o número de cliques deve ser atualizado e exibido ao lado do botão.

function ClickCounter(buttonText) {
  this.contador = 0;

  this.button = document.createElement('button');
  this.button.textContent = buttonText;

  this.counterDisplay = document.createElement('span')
  this.counterDisplay.textContent = ` Cliques: ${this.counter}`;
  
  this.button.addEventListener('click', () => {
    this.contador++
    this.counterDisplay.textContent = `Cliques: ${this.counter}`;
  });

  document.body.appendChild(this.button);
}

const clickCounter = new ClickCounter('Clique aqui')