let output = document.querySelector('.output');
output.innerHTML = "";

for (let i = 10; i >= 0; i--) {
  let para = document.createElement('p');
  if(i === 10) {
    para.textContent = 'Contagem regressiva' + i;  
  } else if(i === 0) {
    para.textContent = 'Lançar!';
  } else {
    para.textContent = i;
  }
  output.appendChild(para);
}


