(function () {
  const generateList = function (array) {
    const ul = document.createElement("ul");

    for (const item of array) {
      const li = document.createElement("li");

      if (Array.isArray(item)) {
        const nestedUl = generateList(item);
        li.appendChild(nestedUl);
      } else {
        li.textContent = item;
      }

      ul.appendChild(li);
    }

    return ul;
  };

  const arrNum = [1, 2, [1.1, 1.2, 1.3, [100, 200]], 3];
  console.log(arrNum);

  console.log(generateList(arrNum));
})();
