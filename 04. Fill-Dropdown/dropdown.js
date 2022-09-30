function addItem() {
  const item = document.getElementById("newItemText");
  const itemValue = document.getElementById("newItemValue");
  const menu = document.getElementById("menu");
  const select = document.createElement("option");
  select.textContent = item.value;
  select.value = itemValue.value;
  menu.appendChild(select);
  item.value = "";
  itemValue.value = "";
}
