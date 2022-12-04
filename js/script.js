let loginButton = document.getElementById("loginButton");
let sections = document.getElementById("bodyIndex").querySelectorAll("section");
let registerLink = document.getElementById("registerLink");
let userEmail;
let userPassword;
registerLink.addEventListener("click", registerUser, false);
loginButton.addEventListener("click", getUserInput, false);
sections[1].style.display = "none";

function getUserInput(_event) {
  userCredentialsValidation(
    document.getElementById("emailInput").value,
    document.getElementById("passwordInput").value
  );
}
function registerUser(_event) {
  sections[0].style.display = "none";
  sections[1].style.display = "block";
  document
    .getElementById("registerButton")
    .addEventListener("click", getUserCredentials, false);
}

function getUserCredentials(_event) {
  setUserCredentials(
    document.getElementById("registerEmailInput").value,
    document.getElementById("registerPasswordInput").value
  );
  sections[1].style.display = "none";
  sections[0].style.display = "block";
}

function setUserCredentials(email, password) {
  userEmail = email;
  userPassword = password;
}
function userCredentialsValidation(email, password) {
  if (email == userEmail && password == userPassword) {
    window.location.replace("./pages/contacto.html");
  } else {
    alert("Acceso denegado");
  }
}
