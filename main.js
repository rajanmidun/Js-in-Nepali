//filter in js
const rollNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// it creates new array
const newRollNumbers = rollNumbers.filter(currentValue => currentValue >= 9);

console.log(`Old array ${rollNumbers}`)
console.log(`Old array ${newRollNumbers}`)
