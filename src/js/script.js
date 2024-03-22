/* eslint-disable */
const DATA_KEY = "formData";

(function () {
  const formPage = () => {
    const form = document.querySelector("#form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const inputs = event.target.querySelectorAll("input, select, textarea");
      const data = {};

      inputs.forEach((input) => {
        if (input.value.trim() !== "") {
          data[input.name] = input.value;
        }
      });

      if (Object.keys(data).length === 0) {
        alert("You should fill the form!");
        return;
      }

      localStorage.setItem(DATA_KEY, JSON.stringify(data));
      event.target.reset();

      const url = location.origin + "/JS_HOMEWORKS/src/output.html";
      window.open(url, "_blank");
    });
  };

  const outputPage = () => {
    const data = JSON.parse(localStorage.getItem(DATA_KEY));
    const main = document.querySelector("main");

    if (!data) {
      main.innerHTML = "<h1>No Data!</h1>";
      return;
    }

    const ul = document.createElement("ul");

    for (const key in data) {
      const li = document.createElement("li");
      li.innerHTML = `<b>${key}: </b> ${data[key]}`;
      ul.append(li);
    }

    main.append(ul);
  };

  if (location.pathname.includes("index.html")) {
    formPage();
  } else if (location.pathname.includes("output.html")) {
    outputPage();
  }
})();
