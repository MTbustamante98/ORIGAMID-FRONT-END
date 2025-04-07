const section = document.getElementById('secao');

console.log(section.outerHTML)
console.log(section.innerHTML)
console.log(section.innerText)

// section.innerText = 'Olá'
// section.innerHTML = '<p>Olá</p>']

console.log(section.parentElement);
console.log(section.parentElement.parentElement);
console.log(section.previousElementSibling);
console.log(section.nextElementSibling);
console.log(section.children[section.children.length - 1]);

const titulo1 = document.querySelector('#secao h1');
const secao2 = document.querySelector('.secao2');
const paragrafo = document.querySelector('.para1');
const paragrafoFooter = document.querySelector('footer p')

secao2.appendChild(titulo1);

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo título!';
section.appendChild(novoH1)
