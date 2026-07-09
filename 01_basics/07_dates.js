//Dates
//Internally, JavaScript stores every date as the number of milliseconds since January 1, 1970, 00:00:00 UTC (called the Unix Epoch).
// let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);  //object

//let createdDate= new Date(2026, 0, 23); //month starts from 0 in JS
//let myCreatedDate= new Date(2026, 0 , 25, 5,3);
//console.log(createdDate.toDateString());
//console.log(myCreatedDate.toLocaleString());

//let mydate= new Date("2026-01-26"); // month in YY-MM-DD format starts from 01

let mydate= new Date("01-14-2026");
//console.log(mydate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);

// console.log(mydate.getTime());

/*
Date.now() returns a number representing the current timestamp, i.e., the number of milliseconds that have elapsed from January 1, 1970, 00:00:00 UTC until the current moment.
getTime() returns a number representing the timestamp of that specific Date object, i.e., the number of milliseconds that have elapsed from January 1, 1970, 00:00:00 UTC until the date stored in that object.
*/

//console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate); 
console.log(newDate.getDay()); 

newDate.toLocaleString('default', {
    weekday : "long"
})
/*
Purpose:

Converts a Date object into a readable string based on a
 specified locale (language/region) and formatting options.
*/