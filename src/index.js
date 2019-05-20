import todos from '../data/todos.js';
import htmlToDOM from './html-to-DOM.js';
import todoTemplate from './todo-template.js';

const todosEl = document.getElementById('todos');

todos.forEach(todo => {
  const html = todoTemplate(todo);
  const dom = htmlToDOM(html);
  todosEl.appendChild(dom);
});