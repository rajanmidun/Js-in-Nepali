// //to get the attribute
// const paragraph = document.querySelector('p');
// console.log(paragraph.classList);

// //remove the old value 
// paragraph.classList.remove('primary');

// //set the class attribute
// // paragraph.classList.add('secondary');
// paragraph.classList.toggle('secondary');
// paragraph.classList.toggle('secondary');


const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
paragraphs.forEach(paragraph => {
  // paragraph.innerHTML = "<h1>Heading</h1>";
  if (paragraph.innerHTML.length > 10) {
    paragraph.classList.add('primary');
  }
  else {
    paragraph.classList.add('secondary');
  }
})
