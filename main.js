// object inside array

const numbers = [1, 2, 3, 4, 5, 6, 5, 7];

var user = {
  firstname: "Raghav",
  lastName: "Shrestha",
  address: "Kathmandu"
}

var users = [
  { firstname: "Raghav", lastName: "Shrestha" },
  { firstname: "Suraj", lastName: "Lohani" }
]

users.forEach(user => {
  console.log(user.firstname);
})
