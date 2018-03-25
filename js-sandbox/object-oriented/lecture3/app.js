// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person("Maria", "Joana");

console.log(person1.greeting());

// customer constructor
function Customer(firstName, lastName, phone, membership) {
  // allows to call another function from somewhere else in the current context
  Person.call(this, firstName, lastName);
  
  this.phone = phone;
  this.membership = membership;
}

// inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// make customer.prototype return Customer() instead of Person
Customer.prototype.constructor = Customer;

// overwrite person greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;  
}

const customer1 = new Customer('Tom', 'Tomtom', '123-123-123', 'Standard');

console.log(customer1);
console.log(customer1.greeting());