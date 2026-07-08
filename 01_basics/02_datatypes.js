"use strict"; //Treat all JS code as newer version

//alert(3+3)  //WE ARE USING NODEJS AND NOT BROWSER

console.log(3+3);console.log("Anushka")
//CODE READIBILTY SHOULD BE HIGH, AVOID SUCH TYPES OF WRITING

let name="Anushka"
let age= 20
let isLoggedIn= false

//number => 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined => 
//symbol => uniqueness



//object

console.log(typeof null);   //OBJECT
console.log(typeof undefined);   //UNDEFINED

//On the basis of how data is accesed and kept in memory, datatypes are of two types:

//Primitive : 
/*
7 types : String, Number, Boolean, null, undefined
,Symbol,BigInt


const score=200
const scoreValue= 300.5
const isLoggedIn=false
const outsideTemp= null
let userEmail;

const id=Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId);

const BigNumber= 123456789012345n;

JS IS A DYNAMICALLY TYPED LANGUAGE
VARIABLE TYPES ARE DEFINED AT RUNTIME AND CAN CHANGE AS DIFFERENT
VALUES ARE ASSIGNED TO THEM

//Reference(non primitive):
Arrays, Objects, Functions

*/
const heroes=["shaktiman", "nagraj", "doga"]
let myObj={
    name= "anushka",
    age= 21,
}
//OBJECTS k andar koi bhi datatypes ka data add kar skte haii, including another object and functions as well

const myFunction = function(){
    console.log("Hello World");
}

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/



//++++++++++++++MEMORY+++++++++++++++

/*
STACK (Primitive types)  -->joh bhi variable declare kiya
uska ek copy milta haii, original mein change nahi hota , callbyvalue type

HEAP(Non Primitve types)
heap mein value rkhne se uska reference milta hai,
joh bhi changes karte hai, original value mein karte hai
*/
let myyoutubeName= "anushkasinha"
let anotheryt= myyoutubeName
anotheryt= "manasisingh"
console.log(myyoutubeName)
console.log(anotheryt)

let userone={
    email:"anushka@google.com",
    upi: "abc@ybl",
}

usertwo=userone;
usertwo.email= "sinha@google.com" ;

console.log(userone.email);
console.log(usertwo.email);



