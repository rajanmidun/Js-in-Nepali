//Arithmetic operator

// Addition +
//Subtraction -
//Multiplication *
//Division /
//Remainder %
// Exponentiation **
//Increament ++
//Decrement --

let a = 6;
let b = 5;

console.log("Addition " + (a + b));
console.log("Subtraction " + (a - b));
console.log("Multiplication " + (a * b));
console.log("Division " + (a / b));
console.log("Remainder " + (a % b));
console.log("Exponentiation " + (a ** b));// a^b 6^5;

//Increment ++
// let c = a++; //post increment => c=6 a=7
// let c = ++a //pre increment =>c=7 a=7  
// console.log(a, c);


//Increment --
// let c = a--; //post increment => c=6 a=5
let c = --a //pre increment =>c=5 a=5  
console.log(a, c);




//Assignment operator
let y = 5;
let z = y; //z=5;

// y += 5;// y=y+5=10
// y -= 5;// y=y-5=0
// y *= 5;// y=y*5=25
// y /= 5;// y=y/5=1
// y %= 5;// y=y%5=0
y **= 5;// y=y^5=3125
console.log(y);
