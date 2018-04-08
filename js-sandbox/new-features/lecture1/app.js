// iterator
/* function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length ? 
             {value: names[nextIndex++], done: false} :
             { done: true}
    }
  }
}

// create an array of names
const namesArr = ['Jack', 'Jill', 'Drake', 'Josh'];

// init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value); */

// generator 
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID creator
function* createIds() {
  let index = 1;

  while(true) {
    yield index++;
  }
}

const id = createIds();

console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);