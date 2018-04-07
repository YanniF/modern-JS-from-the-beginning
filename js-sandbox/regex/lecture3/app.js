let re;

// literal characters
re = /hello/;
re = /hello/i;

// metacharacter symbols
re = /^h/i;          // must start with
re = /world$/i;      // must end with
re = /^hello$/i;     // must begin and end with
re = /h.llo/i;       // matches any ONE character
re = /h*llo/i;       // matches the PRECEDING expression 0 or more times
re = /gre?a?y/i;     // optional character
re = /gre?a?y\?/i;   // escape character


// const str = 'Hello World';
const str = 'gray?';
const result = re.exec(str);

console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  }
  else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);