/* eslint-disable */
const DATA_KEY = "todoData";

(function () {
  const form = document.querySelector("[data-form]");
  const todoList = document.querySelector("[data-todo-list]");

  const createTodoListBox = (param) => {
    const container = document.createElement("div");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Task!";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "5px";
    deleteBtn.style.background = "rgba(0, 0, 0, 0.45)";

    container.className = "col-4";
    container.innerHTML = ` <div class="taskWrapper">
        <div class="taskHeading">${param.title}</div>
        <div class="taskDescription">${param.description}</div>
      </div>`;

    container.append(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      container.remove();
    });

    return container;
  };

  const appendTodoListBox = (elem) => {
    todoList.append(elem);
  };

  const saveTodoForm = (item) => {
    const todoForm = JSON.parse(localStorage.getItem(DATA_KEY)) || [];
    todoForm.push(item);
    localStorage.setItem(DATA_KEY, JSON.stringify(todoForm));

    return todoForm;
  };

  document.addEventListener("DOMContentLoaded", () => {
    const todoForm = JSON.parse(localStorage.getItem(DATA_KEY)) || [];
    for (const key of todoForm) {
      appendTodoListBox(createTodoListBox(key));
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputs = document.querySelectorAll("input, textarea");
    const data = {};

    for (const input of inputs) {
      if (!input.value.trim()) return alert("Required data!");
      data[input.name] = input.value;
    }

    const todoListBox = createTodoListBox(data);

    saveTodoForm(data);

    appendTodoListBox(todoListBox);

    event.target.reset();
  });
})();
