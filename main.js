//function

function add(a = 12, b = 12) {
  const sum = a + b;
  return "The sum is " + sum;
}

const result1 = add(12, 14);
console.log(result1);
console.log(add(13, 14));
