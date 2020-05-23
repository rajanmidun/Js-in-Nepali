//Array in js
const name1 = "Rajan";
const name2 = "Raj";
const name3 = "Raghav";

let names = ['Rajan', 'Raj', 'Raghav'];

//accessing one element
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

//to get the length of arrray
console.log(names.length);

//type of array
console.log(typeof names);
console.log(Array.isArray(names));

//remove first element
const result = names.shift();
console.log("Removed element" + result);
console.log(names);

//add new element
names.push("Shyam");
console.log(names);

//remove last element
names.pop();
console.log(names);
