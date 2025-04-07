const para = document.querySelector('p');
const paragraphStyle = getComputedStyle(para);

const {color, fontSize, margin} = paragraphStyle;

alert(`Cor: ${color} Font-size: ${fontSize} Margin: ${margin}`)