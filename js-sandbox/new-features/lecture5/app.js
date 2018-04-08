// sets - store unique values of any type

const set1 = new Set();

// add values to set
set1.add(232);
set1.add('String');
set1.add({name: 'Lulu'});
set1.add(true);
set1.add(232);

const set2 = new Set([1, true, 'String']);

console.log(set1);
console.log(set2);

// get count
console.log(set1.size);

// check for values
console.log(set1.has(232));
console.log(set1.has(200 + 32));
console.log(set1.has({name: 'Lulu'}));

// delete from set
set1.delete(232);

console.log(set1 + "\n\n\n");

// iterating through sets

for(let item of set1) {
  console.log(item);
}

set1.forEach((value) => {
  console.log(value);
});

console.log("\n\n\n")
// convert set to array
const setArr = Array.from(set1);
console.log(setArr);