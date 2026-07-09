const marvel_heroes=["thor","ironman", "spiderman"]
const dc_heroes=["superman","flash","batman"]

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes)
console.log(marvel_heroes[3][1])

const all_heroes= marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

////using spread operator...
const all_new_heroes=[...marvel_heroes, ...dc_heroes]  


const another_array=[1,2,3,[4,5,6],7,[6,7],[4,5]]
const real_array= another_array.flat(Infinity)
console.log(real_array)

console.log(Array.isArray("Anushka")) //Purpose:
//Checks whether a value is an array or not.


console.log(Array.from("Anushka"))
//Array.from(iterable)
//Converts an iterable or array-like object into an array

console.log(Array.from({name:"anushka"})) //[]
//Array.from({name:"Anushka"})
//Object is neither iterable nor array-like

const obj = {
    name: "Anushka",
    age: 20
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));



