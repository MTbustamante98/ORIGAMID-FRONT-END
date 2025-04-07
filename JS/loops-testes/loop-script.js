let contatos = [
"Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

let para = document.querySelector("p");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let procuraNome = input.value;
  input.value = "";
  input.focus();
  for(let i = 0; i < contatos.length; i++) {
    let splitContact = contatos[i].split(":");
    if(splitContact[0] === procuraNome) {
      para.textContent = splitContact[0] + "'s number is " + splitContact[1] + ".";
      break;
    } else {
      para.textContent = "Contact not found."
    }
  }
})