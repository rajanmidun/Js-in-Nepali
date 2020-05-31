//to get the attribute
const link = document.querySelector('a');
console.log(link.getAttribute('href'));


//set the attribut value
link.setAttribute('href', 'https://www.facebook.com');
link.innerText = "Facebook";

//get the style properties
console.log(link.style);

//set the style properties
link.style.color = "skyblue";
link.style.fontSize = "12px";