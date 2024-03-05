(function () {
  const createTable = function () {
    const table = document.createElement("table");

    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 10; i++) {
      const row = document.createElement("tr");
      for (let f = 1; f <= 10; f++) {
        const cell = document.createElement("td");
        cell.textContent = (i - 1) * 10 + f;
        cell.style.color = "blue";
        cell.style.border = "2px solid pink";
        cell.style.padding = "12px";
        row.appendChild(cell);
      }
      fragment.appendChild(row);
    }
    table.appendChild(fragment);
    document.body.appendChild(table);
  };

  createTable();
})();
