let re;

// literal characters
re = /hello/;
re = /hello/i;

// metacharacter symbols
re = /^h/i;           // must start with
re = /world$/i;       // must end with
re = /^hello$/i;      // must begin and end with
re = /h.llo/i;        // matches any ONE character
re = /h*llo/i;        // matches the PRECEDING expression 0 or more times
re = /gre?a?y/i;      // optional character
re = /gre?a?y\?/i;    // escape character

// brackets [] - character sets
re = /gr[ae]y/i;      // must be an a or e
re = /[GF]ray/;       // must be an G or F
re = /[^GF]ray/i;     // match anything except an G or F
re = /[A-Z]ray/;      // match any uppercase letter
re = /[A-Za-z]ray/;   // match any letter
re = /[0-9]ray/;      // match any number

// curly braces {} - quantifiers
re = /Hel{2}o/i;      // the letter before must occur exactly {n} amount of times
re = /Hel{2,4}o/i;    // must occur an {n} amount of times
re = /Hel{2,}o/i;     // must occur at least {n} times

// parentheses () - grouping
re = /^([0-9]x){3}$/; // must be exctaly 3x3x3x

// shorhand character classes
re = /\w/;            // word character - alphanumeric or _
re = /\w+/;           // + = one or more
re = /\W/;            // non-word character
re = /\d/;            // match any digit
re = /\d+/;           // match any digit 0 or more times
re = /\D/;            // match any non-digit
re = /\s/;            // match whitespace char
re = /\S/;            // match non-whitespace char
re = /Hell\b/i;       // word boundary

// assertions
re = /x(?=y)/;        // match x only if it is followed by y
re = /x(?!y)/;       // match x only if it is followed by y


// const str = 'Hello World';
// const str = 'gray';
// const str = '3x3x3x3x';
const str = 'Hell World xy';

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