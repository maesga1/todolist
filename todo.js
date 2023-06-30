let tasks = [];
const taskList = document.getElementById("taskList");

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;
  if (task !== "") {
    tasks.push(task);
    taskInput.value = "";
    renderTasks();
  }
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = task;
    listItem.innerHTML += `<button onclick="updateTask(${index})">Actualizar</button> 
                          <button onclick="deleteTask(${index})">Borrar</button>`;
    taskList.appendChild(listItem);
  });
}

function updateTask(index) {
  const newTask = prompt("Ingrese la nueva tarea");
  if (newTask !== null) {
    tasks[index] = newTask;
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
renderTasks();
