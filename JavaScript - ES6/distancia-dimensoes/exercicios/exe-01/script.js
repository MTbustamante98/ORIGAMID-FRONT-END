const div = document.querySelector('div');
const btn = document.querySelector('button');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
  const width = div.offsetWidth;
  const height = div.offsetHeight;
  message.innerText = `Altura: ${width} \n Largura: ${height}`;
})