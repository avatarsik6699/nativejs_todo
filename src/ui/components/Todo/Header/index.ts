export default class TodoHeader {
  private template = `
  <div class="todo-header">
    <div class="todo-header__wrapper">
      <span class="todo-header__title">Text text text</span>
    </div>
  </div>`;

  public render = (anchor: Element): void => {
    anchor.insertAdjacentHTML('afterbegin', this.template);
  };
}
