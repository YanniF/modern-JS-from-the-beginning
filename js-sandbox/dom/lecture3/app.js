let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// get child nodes
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

/* Node Types
  1 - Element
  2 - Attribute (deprecated)
  3 - Text node
  8 - Comment
  9 - Document itself
  10- Doctype

*/

// get children element nodes
val = list.children;
val = list.children[1];

list.children[1].textContent = "Hiii";

// children of children
val = list.children[3].children;
list.children[3].children[0].id = 'test-link';

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);