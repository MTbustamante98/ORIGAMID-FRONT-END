document.addEventListener('DOMContentLoaded', function() {
let contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

let para = document.querySelector("p");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener('click', function () {
  let searchName = input.value;
  input.value = "";
  input.focus();
  for(let i = 0; i < contacts.length; i++) {
    let splitContact = contacts[i].split(":");
    if(splitContact[0] === searchName) {
      para.textContent = 
        splitContact[0] + "'s number is " + splitContact[1] + ".";
      break;
    } else {
      para.textContent = "Contact not found.";
    }
  }
})
})