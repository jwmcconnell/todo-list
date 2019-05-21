function todoTemplate(todo) {
  let checked = '';

  if(todo.completed) {
    checked = 'checked';
  }

  return /*html*/`
  <li>
    <label>
      <input type="checkbox" ${checked}/>
      ${todo.task}
    </label>
  </li>
`;
}

export default todoTemplate;