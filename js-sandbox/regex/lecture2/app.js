let result;
let re;
re = /hello/i; // i - case insensitive


// console.log(re.source);

// exec() - returns the result in an array if there there's a match, or null
result = re.exec('hello world');

// test() - returns true e false if there's a match
result = re.test('Hello');

// match() - returns an array or null
result = "Hello there".match(re);

// search() - returns the index of the first match if not founds returns -1
result = "Bilu Bilu Hello there".search(re);

// replace() - returns a new string with some or all matches of a pattern
result = "Hello there".replace(re, 'Hi');

console.log(result);