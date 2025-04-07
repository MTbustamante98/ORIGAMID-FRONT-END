const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const tbody = document.querySelector("tbody");
const btn = document.querySelector("button");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  createCell() {
    const row = document.createElement("tr");

    const cellName = document.createElement("td");
    cellName.textContent = this.name;

    const cellPrice = document.createElement("td");
    const cellInput = document.createElement("input");
    cellInput.type = 'number';
    cellInput.value = this.price;
    cellInput.addEventListener("change", () => {
      this.price = cellInput.value;
    });
    cellPrice.appendChild(cellInput);

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remover";
    deleteButton.addEventListener("click", () => {
      row.remove();
    });
    actionCell.appendChild(deleteButton);

    row.appendChild(cellName);
    row.appendChild(cellPrice);
    row.appendChild(actionCell);

    return row;
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  
  const productValue = new Product(productName.value, productPrice.value);

  const ballot = productValue.createCell();
  tbody.appendChild(ballot);

  productName.value = '';
  productPrice.value = '';
});