const test = QUnit.test;

QUnit.module('todo template');

test('make an uncompleted task', function(assert) {
  //Arrange
  // Set up your parameters and expectations
  const todo = {
    task: 'Learn JS',
    completed: false
  };

  const expected = /*html*/`
    <li>
      <input type="checkbox" />
      <span>Learn JS</span>
    </li>
  `;
  //Act 
  // Call the function you're testing and set the result to a const
  const html = todoTemplate(todo);
  //Assert
  assert.htmlEqual(html, expected);
});

test('make a completed task', function(assert) {
  //Arrange
  // Set up your parameters and expectations
  const todo = {
    task: 'Learn JS',
    completed: true
  };

  const expected = /*html*/`
    <li>
      <input type="checkbox" checked/>
      <span>Learn JS</span>
    </li>
  `;
  //Act 
  // Call the function you're testing and set the result to a const
  const html = todoTemplate(todo);
  //Assert
  assert.htmlEqual(html, expected);
});


function todoTemplate(todo) {
  let checked = '';

  if(todo.completed) {
    checked = 'checked';
  }

  return /*html*/`
  <li>
    <input type="checkbox" ${checked}/>
    <span>${todo.task}</span>
  </li>
`;
}