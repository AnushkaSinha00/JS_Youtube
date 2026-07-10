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
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof mySym)

/*
Symbol() creates a unique primitive value.
typeof Symbol() → "symbol".
Symbols are mainly used as unique object property keys.
To use a Symbol as a key, always write [symbol].
Access a Symbol property using obj[symbol], not obj.symbol.
Two Symbols with the same description are never equal.

*/

JsUser.email="anushka@chatgpt.com"
//Object.freeze(JsUser);
JsUser.email= "anushka@microsoft.com"
//console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello JS User")
}
//console.log(JsUser.greeting())

JsUser.greetingTwo= function(){
    console.log(`Hello Js User,${this.name}`);
}  //this keyword to use to access all the properties of this object Jsuser
//console.log(JsUser.greetingTwo());


const tinderUser = new Object()  //singleton object
tinderUser.id="123abc" //values can be set to the properties using . operator to access the property names
tinderUser.name= "Anu"
tinderUser.isLoggedIn= false

const regularuser= {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Anushka",
            lastname: "Sinha"
        }
    }
}
console.log(regularuser.fullname?.userfullname.firstname)

//Merging two objects
const obj1={
    1:"a", 2:"b"
}
const obj2={3:"a", 4:"b"}
const obj3=Object.assign({}, obj1, obj2)
console.log(obj3)

/*
Object.assign()

Syntax:

Object.assign(target, source1, source2, ...)
target → the object where properties will be copied.
sources → objects whose properties are copied.


in output, Notice that object keys are
 displayed as strings ('1', '2') because JavaScript automatically converts 
 numeric property names to strings.
*/

//Nowadays, the spread operator is used more often:

const obj30 = {
    ...obj1,
    ...obj2
};

console.log(obj30);

// It produces the same output

const users=[
    {id:1,
        email:" a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    }
]
users[1].email
/*
General syntax

Whenever you have an array of objects, use:

arrayName[index].propertyName

For example:

users[0].email
users[1].id
users[0].id
users[1].email

This pattern (array[index].property) is 
extremely common in JavaScript, especially 
when working with APIs, React, and JSON data.
*/

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

/*
hasOwnProperty() – 

📌 Purpose: Checks whether an object has a specific property directly (not inherited).

Syntax:

object.hasOwnProperty("propertyName")

Returns:

true → Property exists directly on the object.
false → Property doesn't exist (or is inherited, not own).
*/



//    OBJECT DESTRUCTURE   

const course={
    coursename:"JS",
    price:"999",
    courseInstructor:"Anushka"
}

//course.courseInstructor

const{courseInstructor}=course
console.log(courseInstructor)

const{courseInstructor: instructor}=course
console.log(instructor)