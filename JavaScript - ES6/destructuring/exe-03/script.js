const listaUL = document.querySelectorAll('li');
const arrayList = Array.from(listaUL);

// const itemOne = arrayList[0];
// const itemTwo = arrayList[1];
// const itemThree = arrayList[2];
// const itemFour = arrayList[3];

const [item1, item2, item3, item4] = arrayList;

console.log(item2.textContent)