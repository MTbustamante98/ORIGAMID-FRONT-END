const evento = document.querySelector('h1');
const btn = document.querySelector('button');

function eventClick(event) {
  console.log(event)
  const currentTarget = event.currentTarget;
  console.log(currentTarget);
  const target = event.target;
  console.log(target);
  const type = event.type;
  console.log(event.type);
  const path = event.path;
  console.log(event.path);
}
btn.addEventListener('click', eventClick);




function handleKeyboard(event) {
  if(event.key === 'a') 
    document.body.classList.toggle('azul');
  else if(event.key == 'v') 
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);