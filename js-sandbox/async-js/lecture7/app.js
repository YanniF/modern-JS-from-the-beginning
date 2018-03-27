// one line functions doesn't need curly braces
// const sayHello = (text) => console.log(text);
// sayHello("Hi everybody");
/*
// one line return
const sayHello = () => 'Hello'; 

// same as above
const sayHello = function() {
  return 'Hello';
}

// return object
const sayHello = () => ({msg: 'Hello'}); 
console.log(sayHello());

// multiple params need parenthesis
const sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}`;

console.log(sayHello('Yanni', 'Nanana'));
*/
const users = ['Sono', 'Soninho', 'Sonão'];

const nameLengths = users.map(name => name.length);
console.log(nameLengths);