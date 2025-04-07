const userName = document.getElementById("nome");
const userEmail = document.getElementById("email");
const userAge = document.getElementById("idade");
const listType = document.getElementById("userList");
const btn = document.querySelector("button");

class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  createListItem() {
    const listItem = document.createElement("li");
    listItem.innerText = `Nome: ${this.name} \n E-mail: ${this.email} \n Idade: ${this.age}.`;
    return listItem;
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const user = new User(userName.value, userEmail.value, userAge.value);

  const listItem = user.createListItem();
  listType.appendChild(listItem);

  userName.value = '';
  userEmail.value = '';
  userAge.value = '';
});
