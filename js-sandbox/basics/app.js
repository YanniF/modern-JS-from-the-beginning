//--- CONSOLE ---//
console.log("//--- CONSOLE ---//");

people = {
  name: "Yanni",
  age: 28,
  rich: "Not yet",
  dumb: true
}

console.table(people);
console.error("Beep boop. Error!");
// console.clear();
console.warn("Beep boop. Warning!");

// how long will it take to do this
console.time("Hello");
console.log("Hello World"
);
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.timeEnd("Hello");


//--- VARIABLES TYPES ---//

console.log("\n\n\n//--- VARIABLES ---//");

const name = 'Yanni Yah Yah';
console.log(typeof name);

let val;
// number to string

//val = (5+4).toString(); 
val = String(5+5); // same thing

console.log(val + " --- typeof: " + typeof val + " --- lenght: " + val.length);

// string to number
val = Number('3');
val = Number(false);
val = Number(null);

console.log(val + " --- typeof: " + typeof val + " --- toFixed: " + val.toFixed());

val = parseInt('100.23');
val = parseFloat('103.8');

console.log(val + " --- typeof: " + typeof val + " --- toFixed: " + val.toFixed());


//--- MATH ---//

console.log("\n\n\n//--- MATH ---//");

val = Math.min(2,8,0,-1,55);
val = Math.max(2,8,0,-1,55);
val = Math.floor(Math.random() * 20 + 1);

console.log(val);


//--- TEMPLATE LITERALS ---//

const name2 = 'Yanni';
const age = 22;
const job = 'Web Developer';
const city = 'Vancouver';
let html;

// Without template strings (ES5)
html = '<uL><li>Name: ' + name2 + '</li><li>Age: ' + age + '</li><li>Job: ' 
        + job + '</li><li>City: ' + city + '</li></ul>';

// With template string (ES6)
html = `
    <ul>
      <li>Name: ${name2}</li>
      <li>Age: ${age}</li>
      <li>Job: ${job}</li>
      <li>City: ${city}</li>
      <li>${2 + 2}</li>
      <li>${hello()}</li>
      <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

function hello() {
  return "Hello";
}

document.body.innerHTML = html;


//--- ARRAYS ---//
console.log("\n\n\n//--- ARRAY ---//");

const mixed = [22, 'Hello', true, undefined, null, {a:1, b:'Juju'}, new Date()];
const numbers = new Array(54,2,7,88,21,100,4);
const numbers2 = new Array(54,2,7,88,21,100,4);

console.log(mixed);

val =  Array.isArray(mixed);
console.log(val);

// add on to end
numbers.push(250);
// add on to front
numbers.unshift(120);
// take off from end
numbers.pop();
// take off from front
numbers.shift();
// splice values
numbers.splice(1,1);

// use the "compare function"
val = numbers.sort(function(x, y) {
  return x - y;
});

val = numbers.sort(function(x, y) {
  return y - x;
});

// find
function under50(num) {
  return num < 50;
}

val = numbers2.find(under50);

console.log(val);


//--- FOR EACH ---//
console.log("\n\n\n//--- FOR EACH ---//");

let text = "";

numbers2.forEach(function(number) {
  text += number + " ";
});

console.log(text);
text = "";

numbers2.forEach(number => {
  text += number + " ";;
});

console.log(text);
text = "";


for(let number of numbers2) {
  text += number + " ";;
}

console.log(text);
text = "";


//--- FUNCTIONS ---//
console.log("\n\n\n//--- FUNCTIONS ---//");

const square = function(x = 3) {
  return x * x;
};

console.log(square(4));

// IMMEDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
(function() {
  console.log('IIFE ran...');
})();

(function(name) {
  console.log('Hello ' + name);
})("Yanni");


//--- MAP ---//
console.log("\n\n\n//--- MAP ---//");

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 3, name: 'Steve'}
];

const names = users.map(function(user) {
  return user.name;
});

console.log(names);


//--- WINDOW METHODS / OBJECTS / PROPERTIES ---//
console.log("\n\n\n//--- WINDOW METHODS / OBJECTS / PROPERTIES ---//");

/*
if(confirm('Are you sure?')) {
  alert("Sure");
}
else {
  alert("Not sure");
}

*/

// outter height and width
val = window.outerHeight;
val = window.outerWidth;

// inner height and width
val = window.innerHeight;
val = window.innerWidth;

// scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;

// Redirect
// window.location.href = "http://google.com";

// Reload
// window.location.reload();

// History Object
// window.history.go(-1);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appVersion;

console.log(val);