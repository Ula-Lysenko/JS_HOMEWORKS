const checkNum = function () {
  const inputElem = document.getElementById("numberUser");
  const inputValue = parseInt(inputElem.value);

  if (inputValue % 2 === 0) {
    alert("Ваше число - парне!");
  } else {
    alert("Ваше число - непарне!");
  }
};
