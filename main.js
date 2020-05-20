//global and local scope in js

let address = "Kathmandu"; //global scope


function information(name, age) {
  // let address = "Kathmandu"; //local scope
  console.log("From function " + address);
}

information("Rajan", 23);

console.log("Outside the function " + address);


