let pessoas = [
  'Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'
];

let admitido = document.querySelector('.admitidos');
let recusado = document.querySelector('.recusados');

admitido.textContent = 'Admit: ';
recusado.textContent = 'Refuse: '


for (let i = 0; i < pessoas.length; i++) {
  if(pessoas[i] === 'Phil' || pessoas[i] === 'Lola') {
    recusado.textContent += pessoas[i] + ", ";
  } else {
    admitido.textContent += pessoas[i] + ", ";
  } 
  recusado.textContent =
  recusado.textContent.slice(0, recusado.textContent.length-1) + '.';
  admitido.textContent = 
  admitido.textContent.slice(0, admitido.textContent.length-1) + '.';
}