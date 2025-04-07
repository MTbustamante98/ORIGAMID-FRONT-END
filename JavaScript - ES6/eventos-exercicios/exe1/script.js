document.addEventListener('click', function() {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

const div = document.getElementById('theDiv');

function press() {
  this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

div.addEventListener('click', press);