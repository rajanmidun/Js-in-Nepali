const addForm = document.querySelector('.add-todo');
const searchForm = document.querySelector('.search-todo');
const todoList = document.querySelector('ul');
// console.log(addForm);

addForm.addEventListener('submit', e => {
  e.preventDefault();

  //add new todo
  const todo = addForm.todo.value.trim().toLowerCase();
  if (todo.length > 0) {
    const li = `
      <li>
        <span>${todo}</span>
        <i class="far fa-trash-alt delete-icon"></i>
      </li>
    `;
    todoList.innerHTML += li;
    addForm.reset();
  }
})

//delete todo
todoList.addEventListener('click', e => {
  if (e.target.classList.contains('delete-icon')) {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }
  // console.log(e.target.classList.contains('delete-icon'));
})


//search todo task
searchForm.search.addEventListener('keyup', e => {
  const search = searchForm.search.value.trim().toLowerCase();
  // console.log(todoList.children);
  let lists = Array.from(todoList.children);
  // console.log(lists);

  lists.forEach(list => {
    if (!list.textContent.toLowerCase().includes(search)) {
      list.classList.add('invisible');
    }
  })

  lists.forEach(list => {
    if (list.textContent.toLowerCase().includes(search)) {
      list.classList.remove('invisible');
    }
  })

});

