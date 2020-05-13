//primitive data types
let name = "Rajan";

let info = name;
info = "Shyam";

console.log(info);
console.log(name);


//Referential data types

let object1 = {
  name: "Rajan",
  address: "Kathmandu"
}

let object2 = object1;
object2.name = "Shyam";

console.log(object1);
console.log(object2);