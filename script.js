const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task!");

  
  const now = new Date();
  const dateString = now.toLocaleDateString('id-ID', {
    day: '2-digit', month: 'long', year: 'numeric'
  });


  const li = document.createElement('li');

  
  const header = document.createElement('div');
  header.classList.add('task-header');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.classList.add('task-text');
  span.addEventListener('click', () => {
    span.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete');
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  header.appendChild(span);
  header.appendChild(deleteBtn);

  // Tanggal
  const date = document.createElement('div');
  date.textContent = dateString;
  date.classList.add('date');

  // Gabungkan semua
  li.appendChild(header);
  li.appendChild(date);
  taskList.appendChild(li);

  taskInput.value = "";
}
