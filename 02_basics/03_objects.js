//singleton
/*
constructor se object banega toh woh singleton
banega as single instance
object literals se banega toh woh singleton nahi banega
as many literals
*/


//object literals
const mySym= Symbol("key1")
const JsUser1={}  //empty object
const JsUser={
    name:"Anushka",
    "full name": "Anushka Sinha",
    [mySym]: "mykey1",
    age:21,
    email: "anushka@google.com",
    location: "Malda",
    isLoggedIn: false,
    lastLoginDays:["Monday","Wednesday"]
}  
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(typeof mySym)

/*
Symbol() creates a unique primitive value.
typeof Symbol() → "symbol".
Symbols are mainly used as unique object property keys.
To use a Symbol as a key, always write [symbol].
Access a Symbol property using obj[symbol], not obj.symbol.
Two Symbols with the same description are never equal.

*/

JsUser.email="anushka@chatgpt.com"
Object.freeze(JsUser);
JsUser.email= "anushka@microsoft.com"
console.log(JsUser);
