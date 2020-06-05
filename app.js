const addForm = document.querySelector('.add-todo');
const todoList = document.querySelector('ul');
// console.log(addForm);

addForm.addEventListener('submit', e => {
  e.preventDefault();

  const todo = addForm.todo.value.trim();
  if (todo.length > 0) {
    const li = `
      <li>
        <span>${todo}</span>
        <i class="far fa-trash-alt delete-icon"></i>
      </li>
    `;
    todoList.innerHTML += li;
  }

  // console.log(li);
})