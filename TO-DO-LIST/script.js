const taskInput = document.getElementById('task-input');
const taskTime = document.getElementById('task-time');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let history = JSON.parse(localStorage.getItem('history')) || [];

function saveData() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('history', JSON.stringify(history));
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    const timeDisplay = task.time ? ` ⏰ ${task.time}` : '';
    
    li.innerHTML = `
      <span>${task.text}${timeDisplay}</span>
      <div>
        <button class="complete-btn">✔</button>
        <button class="delete-btn">🗑</button>
      </div>
    `;

    li.querySelector('.complete-btn').onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      if (tasks[index].completed) {
        tasks[index].completedAt = new Date().toISOString();
        history.push({ ...tasks[index] });
      } else {
        delete tasks[index].completedAt;
      }
      renderTasks();
      saveData();
    };

    li.querySelector('.delete-btn').onclick = () => {
      const deletedTask = {
        ...tasks[index],
        deletedAt: new Date().toISOString()
      };
      history.push(deletedTask);
      tasks.splice(index, 1);
      renderTasks();
      saveData();
    };

    taskList.appendChild(li);
  });
}

addBtn.onclick = () => {
  const text = taskInput.value.trim();
  const time = taskTime.value;

  if (!text) return;

  tasks.push({ text, time, completed: false });
  taskInput.value = '';
  taskTime.value = '';
  renderTasks();
  saveData();
};

renderTasks();
