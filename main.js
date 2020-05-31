//events
//is a signal that something has happened

const button = document.querySelector('button');

// let count = 0;
// button.addEventListener('click', () => {
//   count++;
//   console.log("You clicked the button", count);
// })

//adding new content to the html document
const ul = document.querySelector('ul');
button.addEventListener('click', () => {
  // ul.innerHTML += "<li>New movie</li>";
  const li = document.createElement('li');
  li.innerText = "New movie";
  ul.appendChild(li);
})

//delete any element using events
const lists = document.querySelectorAll('li');

lists.forEach(li => {
  li.addEventListener('click', (events) => {
    events.target.remove();
    // console.log("List clicked");
  })
})
