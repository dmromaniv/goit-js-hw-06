const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", checkLogData);

function checkLogData(event) {
  event.preventDefault();

  const loginData = {};
  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    alert("Всі поля повинні бути заповнені");
  } else {
    loginData[email.name] = email.value;
    loginData[password.name] = password.value;
    event.currentTarget.reset();

    console.log(loginData);
  }
}
