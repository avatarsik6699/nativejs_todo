import './styles.scss';
import {ITodoProps} from './types';
import TodoModel from './model';

const model = new TodoModel();

export default class Todo {
  private template = `<div class="todo-item"></div>`;

  // eslint-disable-next-line no-useless-constructor
  constructor(private props: ITodoProps = model.defaultProps) {}

  public render = (rootAnchor: Element): void => {
    const todoAnchor = this.init(rootAnchor);

    model.children.forEach(({name, Component}) => {
      if (this.props[name] && todoAnchor) {
        const component = new Component();
        component.render(todoAnchor);
      }
    });
  };

  private init = (rootAnchor: Element) => {
    rootAnchor.insertAdjacentHTML('afterbegin', this.template);
    const todoAnchor = document.querySelector('.todo-item');
    return todoAnchor;
  };
}
