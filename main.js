//map in js
const salaries = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const newSalaries = salaries.reduce(salary => salary + 5);

console.log(`Old array ${salaries}`)
console.log(`New array ${newSalaries}`)
