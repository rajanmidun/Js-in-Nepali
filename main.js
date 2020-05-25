//object literal


//Notes
// Unlike regular functions, arrow functions do not have their own this.
let user = {
  name: "Ram",
  address: "Kathmandu",
  login: function () {
    console.log(this);
    console.log(this.name);
  },
  // login: () => {
  //   console.log(this);
  //   console.log(this.name);
  // }
};

user.login();
