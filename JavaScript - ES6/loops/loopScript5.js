let clubes = ["Internacional", "Grêmio", "Juventude"];
//Acessamos uma array utilizando colchetes e um número
console.log(clubes);

// const output = document.querySelector('.output')
// output.innerHTML = ""

// for(let i = 0; i <= 10; i++) {
//   const para = document.createElement('p')
//    if(i === 10) {
//     para.textContent = i + ' ' + ' Contagem regressiva';
//    } else if(i === 0) {
//     para.textContent = i + ' ' + 'Lançar';
//    } else {
//     para.textContent = i;
//    }

//   output.appendChild(para)
// }

// let numero = 0;

// while(numero < 10) {
//   console.log(numero)
//   numero++
// }

// let arrays = document.querySelector('.arrays') 
// let videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];

// for (let iArray = 0; iArray < videoGames.length; iArray++) {
//   let para1 = document.createElement('p');
//   para1.textContent = videoGames[iArray];
//   arrays.appendChild(para1)
// }

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let brasilCopas = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(let arrayNumber = 0; arrayNumber < brasilCopas.length; arrayNumber++) {
  console.log(`O brasil ganhou a copa de ${brasilCopas}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(let frutasLista; frutasLista < frutas.length; frutasLista++) {
  console.log(frutas[frutasLista]);
  if(frutas[frutasLista] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas.lenght - 1;
console.log(ultimaFruta)

//----------------------------------//
const para1 = document.querySelector('p');
const btn = document.querySelector('button');
const input = document.querySelector('input')

function verificar() {
  
    let num = Number(input.value);
     if(num === 'string') {
      para1.textContent += 'Número inválido!'
     }
    let tabela = "";
    for(let i = 0; i <= 10; i++) {
      tabela += `${num} x ${i} = ${num * i} \n`;
  }

  para1.textContent = tabela;
}

btn.addEventListener('click', verificar)