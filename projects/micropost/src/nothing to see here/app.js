// commonJS module syntax
const p1 = require('./mymodule1');
console.log(p1);

// ES2015 module
import { person, sayHello } from './mymodyle2';
console.log(person);
console.log(sayHello());

// import all
import * as mod from './mymodyle2';
console.log(mod.person.name);
console.log(mod.sayHello());

// import default
import greeting from './mymodyle2';
console.log(greeting);