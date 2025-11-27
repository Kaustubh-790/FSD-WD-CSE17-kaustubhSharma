const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach((task) => renderTask(task));

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task");

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(task);
  saveTasks();
  renderTask(task);
  taskInput.value = "";
});

function renderTask(task) {
  const li = document.createElement("li");
  li.textContent = task.text;
  li.dataset.id = task.id;
  if (task.completed) li.classList.add("completed");

  li.addEventListener("click", () => {
    task.completed = !task.completed;
    li.classList.toggle("completed");
    saveTasks();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    tasks = tasks.filter((t) => t.id !== task.id);
    li.remove();
    saveTasks();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
