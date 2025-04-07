const titulo = Array.from(document.querySelectorAll('h3')).find(h3 => h3.textContent.includes('Titulo 2'));

const card = titulo.parentElement;
card.style.border = '1px solid red'
