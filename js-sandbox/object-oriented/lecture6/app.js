class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return "Hello there " + this.firstName + " " + this.lastName;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 200;
  }
}

const customer1 = new Customer('Kust', 'Omer', '9999-9999', 'Premium');

console.log(customer1.greeting());
console.log(Customer.getMembershipCost());