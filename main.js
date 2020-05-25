//object literal

let user = {
  name: "Ram",
  address: "Kathmandu",
  login: function () {
    console.log(this.name);
    console.log("I am logged in ");
  },
//   login: () => {
//     console.log(this.name);
//     console.log("I am logged in ");
//   }
};

user.login();
