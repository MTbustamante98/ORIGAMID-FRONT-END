let div = document.querySelector('div')
let dimensao = div.offsetHeight,
    dimensao2 = div.offsetWidth;
    distanciaTopo = div.getBoundingClientRect();

console.log(dimensao2)
console.log(distanciaTopo)