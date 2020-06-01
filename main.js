//Accessing form in js
//First way
//const form =document.querySelector('form');
//console.log(form);
//console.log(form.username);
//console.log(form.username1);

//Second way
const loginForm=document.forms[0];
console.log(loginForm.length);
console.log(loginForm.elements[1].name);
