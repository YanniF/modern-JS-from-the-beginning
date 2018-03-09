// create element
const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add id
li.id = 'new-item';

// add attribute
li.setAttribute('title', 'New Item');

// create text node and append
li.appendChild(document.createTextNode('Hello World'));

// create new link element
let link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

// append link into li
li.appendChild(link);

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);

// replace element

// create element
const newHeading = document.createElement('h2')
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.getElementById('task-title');

// parent
const cardAction = document.querySelector('.card-action');

// replace
cardAction.replaceChild(newHeading, oldHeading);

// remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item
lis[0].remove();

// remove child element
list.removeChild(lis[3]);

// Classes and attributes
const firstLi = document.querySelector('li:first-child');
link = firstLi.children[0];

// classes
val = link.className;
val = link.classList;
val = link.classList[0];

link.classList.add('test');
link.classList.remove('test');

val = link;

// attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');

console.log(val);