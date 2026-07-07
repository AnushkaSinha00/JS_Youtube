const accountId= 144553 //constant--cannot be changed
let accountEmail= "anu@gmail.com"
var accountPassword= "12345"
accountCity= "Jaipur"

let accountState

// ';' is not mandatory in JS

// accountId=2  //not allowed
console.log(accountId);
accountEmail="hchchch@gmail.com"
accountPassword="21212121"
accountCity="Bangalore"

/*
PREFER NOT TO USE VAR BECAUSE OF ISSUE IN BLOCK SCOPE
AND FUNCTIONAL SCOPE
*/

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
/*
we have used accountState also here in console.table
but havent defined the value of it in declaration
so in table it would show as undefined
*/