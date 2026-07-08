// const score = 600
// console.log(score);  //600
// console.log(typeof score); //number

// //new Number creates a number object, not a primitive
// const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance);  //object

// const a = 100;
// const b = new Number(100);

// console.log(a == b);   // true
// console.log(a === b);  // false
/*
Why?

a is a primitive number.
b is an object.
=== checks both value and type
*/

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const Othernum=23.8996
// console.log(Othernum.toPrecision(4));
//
// 
/*
What does toPrecision() do?

toPrecision(n) returns a string with exactly n significant digits.

Significant digits are the digits counted from the first non-zero digit.
23.8996

Digits: 2 3 8 9 9 6
        ↑ ↑ ↑ ↑
      First 4 significant digits

      The next digit is 9, so the last kept digit (9) is rounded up.

23.89  → 23.90

Notice the trailing 0 is kept because you asked for 4 significant digits.
*/
// const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(25));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,,9,11,2));

console.log(Math.random());
//always gives number between 0 and 1

console.log(Math.random()*10 +1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1)) + min);


