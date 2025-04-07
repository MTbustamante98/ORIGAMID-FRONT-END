// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element() = function() {
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// }

// class Button {
//   constructor(text, background, color) {
//     this.text = text;
//     this.background = background;
//     this.color = color;
//   }
//   element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     buttonElement.style.color = this.color;
//     return buttonElement
//   }
//   appendTo(target) {
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element());
//     return targetElement;
//   }
// }

// const blueButton = new Button('Comprar', 'blue', 'white');
// blueButton.appendTo('body');

class Button {
  constructor(option) {
    this.options = options;
  }
}

const blueButton = new Button({
  backgroundColor: 'blue',
  text: 'Comprar',
  color: 'white',
}) 
