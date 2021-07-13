import './index.scss';
import Todo from './ui/components/Todo';

const root = document.querySelector('#root');
root?.insertAdjacentHTML('afterbegin', '<div class="todo-list"></div>');
const todoListAnchor = root?.querySelector('.todo-list');
if (root && todoListAnchor) {
  // eslint-disable-next-line no-new
  new Todo({
    header: {
      text: '11 August, sunday',
      backgroundColor: 'blue',
      textColor: 'black',
    },
    card: {
      text: 'bla bla',
    },
  }).render(todoListAnchor);
}
