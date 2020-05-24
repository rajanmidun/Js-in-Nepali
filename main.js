//reduce method in js

//Things to know
//a : reduce() method reduce the array data into a single value
//b: syntax:=> array.reduce((total,currentValue, index, array)=>{},initialValue);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const result = numbers.reduce((total, number) => total += number, 0);//at first total=0

console.log(result);
