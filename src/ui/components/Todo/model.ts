import {ITodoProps} from './types';
import TodoHeader from './Header';
import TodoCard from './Card/index';

export default class TodoModel {
  public readonly children = [
    {name: 'header' as const, Component: TodoHeader},
    {name: 'card' as const, Component: TodoCard},
  ];

  public readonly defaultProps: ITodoProps = {
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
