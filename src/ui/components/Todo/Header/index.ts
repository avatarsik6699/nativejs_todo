import { Component } from 'ui/common/Component';
import { getTemplate } from './template';

export class TodoHeader extends Component {
  toHTML = () => getTemplate();
}
