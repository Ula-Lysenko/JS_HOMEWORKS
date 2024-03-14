(function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInp = document.getElementById("name");
    const emailInp = document.getElementById("email");
    const passwordInp = document.getElementById("password");
    const messageElem = document.getElementById("message");

    if (!nameInp.value || !emailInp.value || !passwordInp.value) {
      messageElem.textContent = "Please, fill in all the fields!";
    } else {
      messageElem.textContent = "Registration is successful!";
    }

    nameInp.value = "";
    emailInp.value = "";
    passwordInp.value = "";
  });
})();
