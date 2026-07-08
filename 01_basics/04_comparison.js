console.log("2" >1);
console.log("02" >1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);


/*
THE REASON IS THAT AN EQUALITY CHECK == AND COMPARISON
 > < >= <= WORK DIFFERENTLY.
 COMPARISONS CONVERT NULL TO A NUMBER , TREATING IT AS 0.
 THATS WHY (3) null>=0 is true and null>0 is false

*/

console.log(undefined==0);
console.log(undefined<0);
console.log(undefined>0);

//===
console.log("2"===2);
