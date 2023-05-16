const username = document.querySelector("#username");
const email = document.querySelector("#email");
const subButton = document.querySelector("#subButton");

//make an event listener for username everytime it changes
username.addEventListener("input", () => {
  //make a fetch request to the server

  fetch("/checkUsername?username=" + username.value)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "Username already exists") {
        document.querySelector("#usernameError").style = "display: block";
        document.querySelector("#usernameError").innerHTML =
          "El nombre de usuario ya existe";
        subButton.disabled = true;
      } else {
        document.querySelector("#usernameError").style = "display: none";
        document.querySelector("#usernameError").innerHTML = "";
        subButton.disabled = false;
      }
    });
});

email.addEventListener("input", () => {
  //make a fetch request to the server

  fetch("/checkEmail?email=" + email.value)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "Email already exists") {
        document.querySelector("#emailError").style = "display: block";
        document.querySelector("#emailError").innerHTML = "El email ya existe";
        subButton.disabled = true;
      } else {
        document.querySelector("#emailError").style = "display: none";
        document.querySelector("#emailError").innerHTML = "";
        subButton.disabled = false;
      }
    });
});
