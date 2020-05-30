//to select first element that contains ".section" class name
//querySelector can take class,id,element etc as its parameter;
const div = document.querySelector('.section');

//to select all the elements start with p tag 
const paragraphs = document.querySelectorAll('p');

//to add the new html element
//it returns only one element
const byId = document.getElementById('message');

//to select the element using class
//it returns all the elements that contain "section" class 
const byClass = document.getElementsByClassName('section');

//to select the element using class
//it returns all the elements that contain p tag 
const byTag = document.getElementsByTagName('p');
