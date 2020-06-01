//Form Validation
//Examples
// starting with abc /^abc/
//ending with abc /abc$/
//starting and ending with gef /^gef$/
//should contain only letter and numbers /[a-zA-Z0-9]/
//for checking any character /./
//for checking length /.{6,10}/
//for cheking min length 6 /.{6,}/


const form = document.querySelector('form');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();

  const username = form.username.value;

  const pattern = /[a-zA-Z]{6,10}/;
  const result = pattern.test(username);
  if (!result) {
    message.innerText = "Must be string and length must  be greater than 6 and less than 10";
  }
})