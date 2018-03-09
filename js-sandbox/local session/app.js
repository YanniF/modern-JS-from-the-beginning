/*
// set local storage item
localStorage.setItem('name', 'John');

// set session storage item
sessionStorage.setItem('name', 'Yanni');

// remove from storage
// localStorage.removeItem('name');

// get from storage
const name = localStorage.getItem('name');

// clar local storage
localStorage.clear();
console.log(name);
*/

document.querySelector('form').addEventListener('submit', function(e) {
  
  const task = document.getElementById('task').value;
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task => {
  console.log(task);
});