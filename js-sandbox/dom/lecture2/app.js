//--- Selectors for Single Elements ---//

// document.getElementById()
console.log(document.getElementById('task-title'));

// get things from the element
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');
// change style
taskTitle.style.backgroundColor = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '10px';

// change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span>Tasks</span>';

// document.querySelector() selects the first element
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

//--- Selectors for Multiple Elements ---//
console.log('\n\n\nSelectors for Multiple Elements');

// document.getElemeentsByClassName
let items = document.getElementsByClassName('collection-item');

console.log(items[0]);

items[0].style.color = 'green';
items[2].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); // only select the classes inside the ul

console.log(listItems);

// document.getElementsByTagName
const lis = document.getElementsByTagName('li');

console.log(lis);
console.log(lis[0]);

// document.querySelectorAll returns a node list
items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li) {
  li.style.backgroundColor = '#ccc';
});

liEven.forEach(function(li) {
  li.style.backgroundColor = '#f4f4f4';
});