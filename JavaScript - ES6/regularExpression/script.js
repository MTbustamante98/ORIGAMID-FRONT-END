// const frase = 'JavaScript';
// const regexp = /[a-z]/g
// const fraseNova = frase.replace(regexp, 'A');

// console.timeLog(fraseNova);

// const regexp = /\w+/gi;

// const regexp1 = new RegExp('\\w', 'gi');

// const frase = 'JavaScript Linguagem 101'
// console.log(frase.replace(regexp1, 'X'));

// const regexp = /Java/g;
// const frase = 'JavaScript e Java';

// let i = 1;
// while(regexp.test(frase)) {
//   console.log(i++)
// }

const regexp = /\w{2,}/g;
const frase = 'JavaScript, TypeScript e CoffeeScript';

let regexpResult;

while((regexpResult = regexp.exec(frase)) !== null) {
  console.log(regexpResult[0]);
}