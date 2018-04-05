"use strict"
/* try {
  // myFunction(); // produce a ReferenceError
  // null.myFunction(); // TypeError
  // eval('Hello World'); // SyntaxError
  decodeURIComponent('%'); // URIError
}
catch (e) {
  // console.error(`Name:  ${e.name}. Message: ${e.message}. Kind: ${e instanceof ReferenceError}`);
  console.error(`Name:  ${e.name}. Message: ${e.message}.`);
}
finally {
  console.log("This runs no matter what");
}

console.log("Even with an error the program continues"); */

const user = {
  email: 'jdoe@gmail.com'
};

try {
  if(!user.name) {
    throw 'User has no name';
    // throw new SyntaxError('User has no name');
  }
}
catch (e) {
  console.error(e);
}