const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for(const fruta of frutas) {
  console.log(fruta)
}

const carro = {
  marca: 'Honda',
  ano: 2018
};

for(const key in carro) {
  console.log(key, carro[key])
}