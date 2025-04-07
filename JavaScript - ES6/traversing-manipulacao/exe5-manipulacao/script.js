const para1 = document.querySelector('.container p')
const novoParagrafo = para1.cloneNode(true)
novoParagrafo.innerText = 'Este é um novo parágrafo!'
para1.appendChild(novoParagrafo)