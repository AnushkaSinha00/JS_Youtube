
 function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("K");
    console.log("A");
    
 }
 sayMyName  //Reference
 sayMyName()  //execution , function call

 function addTwoNumbers(number1, number2){
    //console.log(number1+number2);
    return number1+number2
 }
 addTwoNumbers(3,4);
 addTwoNumbers(3,"4");
 addTwoNumbers(3,"a");
 const result = addTwoNumbers(3,5);
 console.log("The result is:", result) //here result comes undefined
 //because in the function we are just consoling the result and not returing any value , so the value 
 //doesnt get stored in any variable when we call it later

function loginUser(username){
    if(username===undefined) //if(!username) same thing
    {
        console.log("Pls enter a username")
        return 
    }
    return `${username} just logged in!`
}
//console.log(loginUser("Anushka"))
//console.log(loginUser()) //undefined just logged in!
//console.log(loginUser("")) //just logged in!

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(50,100,450,600))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(50,100,450,600,10000))
//[ 450, 600, 10000 ]  , val1 er moddhe 50 and val2 er moddhe 100 chole asbe

const user={
    username:"anushka",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`) 

}
handleObject(user)
const myNewArray=[200,400,600,1000]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray))