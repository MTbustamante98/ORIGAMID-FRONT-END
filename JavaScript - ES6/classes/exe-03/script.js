const taskInput = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");
const btn = document.querySelector("button");

class Task {
  constructor(description) {
    this.description = description;
    this.isCompleted = false;
  }
  isCompletedBoolean(listItem) {
    this.isCompleted = true;
    listItem.classList.add("completa")
  }
  createListItem() {
    const listItem = document.createElement("li");
    listItem.innerText = `Tarefa: ${this.description}`;

    const btncompleted = document.createElement("button");
    btncompleted.innerText = "Concluído";
    btncompleted.addEventListener("click", () => { 
      if (!this.isCompleted)
      this.isCompletedBoolean(listItem)
    });
    listItem.appendChild(btncompleted);

    return listItem;
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const taskValue = new Task(taskInput.value);
  const listItem = taskValue.createListItem();
  taskList.appendChild(listItem);

  taskInput.value = "";
})
