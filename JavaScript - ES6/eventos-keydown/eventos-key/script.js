const input = document.getElementById('input1');
const para = document.getElementById('paragrafo');

function press(event) {
  if(event.key === 'Enter') {
    para.textContent = 'Você pressionou enter!';
  }
}

// - Keydown - Detectar uma tecla específica.
input.addEventListener('keydown', press);

const input2 = document.getElementById('input2');
const charCount = document.querySelector('.charCount');

function press2() {
  let count = input2.value.length;
  charCount.textContent = count;
}

input2.addEventListener('keyup', press2);


const input3 = document.getElementById('input3');

function press3(event) {
  let keyCode = event.keyCode;
    if(keyCode < 48 || keyCode > 57) {
      event.preventDefault();
    }
}
input3.addEventListener('keypress', press3);

const input4 = document.getElementById('input4');
const mensagem = document.getElementById('mensagem')
function press4(event) {
  if(event.ctrlKey && event.key === 's') {
    event.preventDefault();
    mensagem.textContent = 'Você pressionou Ctrl + S!'
  }
}
input4.addEventListener('keydown', press4);

const inputFields = document.querySelectorAll('.inputField');

function key(event, index) {
  if(event.key === 'Enter') {
    event.preventDefault();
    let nextField = inputFields[index + 1];
      if(nextField) {
        nextField.focus();
      }
  }
}
  
inputFields.forEach((field, index) => {
  field.addEventListener('keydown', (event) => key(event, index));
})