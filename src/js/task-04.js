let counterValue = 0;

const counterEl = document.querySelector("#counter");
const currentCounterValue = document.querySelector("#value");
const decrementCounterBtn = counterEl.firstElementChild;
const incrementCounterBtn = counterEl.lastElementChild;

decrementCounterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  counterValue--;
  currentCounterValue.textContent = counterValue;
});

incrementCounterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  counterValue++;
  currentCounterValue.textContent = counterValue;
});
