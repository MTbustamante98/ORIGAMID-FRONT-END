const para = document.getElementById('meuTexto');
const divtoolTip = document.getElementById('meuToolTip');

let timeout;

function enterTool(event) {
  timeout = setTimeout(function() {
    divtoolTip.style.display = 'block';
    divtoolTip.style.left = event.pageX + 'px';
    divtoolTip.style.top = event.pageY + 20 + 'px';
  }, 1000);
}

function leaveTool() {
  divtoolTip.style.display = 'none';
}

para.addEventListener('mouseenter', enterTool);
para.addEventListener('mouseleave', leaveTool);

