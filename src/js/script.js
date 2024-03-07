const createTextArea = function () {
  const textArea = document.createElement("textarea");
  textArea.style.margin = "10px";
  textArea.style.padding = "5px";
  textArea.style.border = "2px solid #9933FF";
  const inputElem = document.getElementById("textUser");

  const divElem = document.getElementById("textBlock");

  textArea.innerHTML = inputElem.value;
  divElem.prepend(textArea);
  inputElem.value = "";
};
