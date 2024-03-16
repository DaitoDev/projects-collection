// Get input
const input = document.querySelector("#input");
// Get ul
let ul = document.querySelector("ul");
// Get items left p
const tasksLeft = document.querySelector(".items-left span");

// Display items
function displayItems(item) {
  const li = document.createElement("li");

  // Create check span
  const checkSpan = document.createElement("span");
  checkSpan.classList.add("checkSpan");
  const checkImg = document.createElement("img");
  checkImg.src = "./images/icon-check.svg";
  checkSpan.append(checkImg);
  li.append(checkSpan);

  li.append(item);

  const deleteSpan = document.createElement("span");
  deleteSpan.classList.add("deleteSpan");
  const deleteImg = document.createElement("img");
  deleteImg.src = "./images/icon-cross.svg";
  deleteSpan.append(deleteImg);
  li.append(deleteSpan);

  ul.append(li);
}

// DETECT Check FUNC
function checkItem() {
  const checks = document.querySelectorAll(".checkSpan");
  checks.forEach((check) => {
    check.addEventListener("click", () => {
      check.classList.toggle("checked");
      check.parentElement.classList.toggle("striked");
    });
  });
}

// Detect delete
function deleteItem() {
  const deletes = document.querySelectorAll(".deleteSpan");
  deletes.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.remove();
      itemsLeft();
    });
  });
}

// Clear completed
function clearItems() {
  const clearBtn = document.querySelector(".clear-btn");
  clearBtn.addEventListener("click", () => {
    const li = document.querySelectorAll("li");
    li.forEach((item) => {
      if (item.classList.contains("striked")) {
        item.remove();
      }
    });
  });
}

// Count how many items left
function itemsLeft() {
  const lis = document.querySelectorAll("li");
  tasksLeft.innerText = lis.length;
}

input.addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    if (!input.value == "") {
      displayItems(input.value);
      // Clear input
      input.value = "";
    }
  }
  deleteItem();
  checkItem();
  clearItems();
  itemsLeft();
});
