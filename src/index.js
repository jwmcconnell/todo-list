import todos from '../data/todos.js';
import htmlToDOM from './html-to-DOM.js';
import todoTemplate from './todo-template.js';
import headerTemplate from './header-template.js';

const todosEl = document.getElementById('todos');

const header = headerTemplate();
const headerDOM = htmlToDOM(header);
document.body.firstChild.before(headerDOM);

todos.forEach(todo => {
  const html = todoTemplate(todo);
  const dom = htmlToDOM(html);
  todosEl.appendChild(dom);
});