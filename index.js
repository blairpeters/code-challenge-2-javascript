document.addEventListener("DOMContentLoaded", function () {
  const shoppingList = document.getElementById("shoppingList");
  const itemInput = document.getElementById("itemInput");
  const addItemBtn = document.getElementById("addItemBtn");
  const clearListBtn = document.getElementById("clearListBtn");
  const markPurchasedBtn = document.getElementById("markPurchasedBtn");

  // Array to store shopping list items
  let items = [];

  // Function to make the shopping list
  function createList() {
    shoppingList.innerHTML = "";
    items.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = item.name;
      if (item.completed) {
        li.classList.add("completed");
      }
      li.addEventListener("click", () => {
        toggleCompleted(index);
      });
      shoppingList.appendChild(li);
    });
  }
  // Function to add a new item to the list
  function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName !== "") {
      items.push({ name: itemName, completed: false });
      createList();
      itemInput.value = "";
    }
  }
  function markAllPurchased() {
    items.forEach((item) => {
      item.completed = true;
    });
    createList(); // Render the updated list
  }

  // Event listeners
  addItemBtn.addEventListener("click", addItem);
  clearListBtn.addEventListener("click", () => {
    items = [];
    createList();
  });
  markPurchasedBtn.addEventListener("click", markAllPurchased);
});
