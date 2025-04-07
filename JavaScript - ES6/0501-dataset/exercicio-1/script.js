const buttons = document.querySelectorAll('button');

buttons.forEach(btns => {
  btns.addEventListener('click', function() {
    const color = this.dataset.color;
    document.body.style.backgroundColor = color;
  });
});


