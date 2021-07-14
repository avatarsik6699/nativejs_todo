import { ITodoProps } from './types';
import { TodoHeader } from './Header';
import { TodoCard } from './Card/index';

export default class TodoModel {
  public readonly defaultProps: ITodoProps = {
    components: [TodoHeader, TodoCard],
    header: {
      text: '11 August, sunday',
      backgroundColor: 'blue',
      textColor: 'black',
    },
    card: {
      text: 'default',
    },
  };
}
