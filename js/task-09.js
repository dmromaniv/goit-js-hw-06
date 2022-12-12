function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widgetRef = document.querySelector(".widget");
const colorCodeRef = document.querySelector(".color");
const bodyRef = widgetRef.parentNode;
const changeBtnRef = widgetRef.lastElementChild;

changeBtnRef.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  colorCodeRef.textContent = randomColor;
});
