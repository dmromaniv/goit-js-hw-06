function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Get elements ref
const boxesRef = document.querySelector("#boxes");
const createBtnRef = document.querySelector("[data-create]");
const clearBtnRef = document.querySelector("[data-destroy]");
const inputRef = createBtnRef.previousElementSibling;

// Add elements listener
createBtnRef.addEventListener("click", (event) => {
  event.preventDefault();
  createBoxes(inputRef.value);
  inputRef.value = "";
});
clearBtnRef.addEventListener("click", (event) => {
  event.preventDefault();
  destroyBoxes();
});

// Create new elements
function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    alert("Можливий діапазон значень: 1-100");
    return;
  }
  let newBoxex = "";
  let minBoxWidth = 30;
  let minBoxHeight = 30;

  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor();
    newBoxex += `
    <div style="width:${minBoxWidth}px; height:${minBoxHeight}px; background-color:${randomColor}">
    </div>
    `;
    minBoxWidth += 10;
    minBoxHeight += 10;
  }
  boxesRef.innerHTML = newBoxex;
}

// Clear all elements
function destroyBoxes() {
  boxesRef.innerHTML = "";
}
