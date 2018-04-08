// destructuring assignment

let a, b;
[a, b] = [100, 200];

// rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500, 600];

({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});

console.log(a);
console.log(rest);
console.log(a, b);

const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;

console.log(person1, person2, person3);

// parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let p1, p2, p3;
[p1, p2, p3] = getPeople();

console.log(p1, p2, p3);

// object destructuring
const person = {
  name: 'John Bon',
  age: 52,
  city: 'Miami',
  gender: 'Male',
  sayHello: function() {
    console.log('Hello');
  }
};

// ES5
/* 
const name = person.name,
      age = person.age,
      city = person.city,
      gender = person.gender;
*/

// new ES6 destructuring
const {name, age, gender, sayHello} = person;

console.log(name, age, gender);
sayHello();