const formInputEl = document.querySelector("#validation-input");
const maxInputLength = formInputEl.dataset.length;

formInputEl.addEventListener("blur", (event) => {
  if (maxInputLength == event.currentTarget.value.length) {
    if (event.currentTarget.classList.contains("invalid")) {
      event.currentTarget.classList.remove("invalid");
    }
    event.currentTarget.classList.add("valid");
  } else {
    if (event.currentTarget.classList.contains("valid")) {
      event.currentTarget.classList.remove("valid");
    }
    event.currentTarget.classList.add("invalid");
  }
});
