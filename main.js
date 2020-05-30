const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
  paragraph.innerText += " hello";
})


const div = document.querySelector('.section');
div.innerHTML += "<h1>Heading 1</h1>";

const users = ["Rajan", 'Suraj', 'Raghav'];

const ul = document.createElement('ul');
users.forEach(user => {
  const li = document.createElement('li');
  li.innerText = user;
  ul.appendChild(li);
})

div.appendChild(ul);
