const rangeInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeInputEl.addEventListener("change", (event) => {
  textEl.style.fontSize = event.currentTarget.value + "px";
});
