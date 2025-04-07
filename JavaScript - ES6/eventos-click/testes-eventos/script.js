let btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  let rndCol = "rgb(" + random(255) + "," + random(2555) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);

const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');
const para = document.querySelectorAll('p');

form.onsubmit = function (event) {
  if(fname.value === "" || lname.value === "") {
    event.preventDefault();
    para.textContent = 'Você precisa preencher os espaços vazios'
  }
}

const input = document.getElementById('input');
const para2 = document.querySelector('.mensagem');

function press(event) {
  if(event.key === 'Enter') {
    para2.textContent = 'Você pressionou Enter!';
  } 
}

input.addEventListener('keydown', press);

const input2 = document.getElementById('input2');
const spanCount = document.querySelector('.Count'); 

function pressKey() {
  let count = this.value.length;
  spanCount.textContent = count;
}

input2.addEventListener('keyup', pressKey);