const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

const getInput = () =>
  input.value ? input.value : "empty task (please remove me)";

const userPost = function () {
  let newInput = getInput();
  postFunction(newInput);
  input.value = "";
  showList();
};

let showList = async function () {
  list.textContent = "";
  let currentList = await getList();
  for (item of currentList) {
    let li = document.createElement("li");
    li.className = "li-item";
    li.innerHTML = "<p>" + item.description + "</p>";

    let newBtn = document.createElement("button");
    newBtn.id = item._id;
    newBtn.className = "trashBtn";
    newBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    newBtn.addEventListener("click", () => deleteItem(newBtn.id));

    li.append(newBtn);
    list.append(li);
  }
  currentList.length === 0
    ? (list.classList = "no-border")
    : (list.classList = "list");
};

addBtn.addEventListener("click", userPost);
window.onload = showList();
