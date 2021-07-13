export default class TodoCard {
  private template = `
  <div class="card">
    <div class="card__container">
      <div class="card__info">
        <span class="card__time">9:45</span>
        <span class="card__description">lorem ipsum bla bla bla</span>
      </div>

      <div class="card__avatar-wrapper">
        <img class="card__avatar" src="" alt=""/>
      </div>
    </div>
  </div>`;

  public render = (anchor: Element): void => {
    anchor.insertAdjacentHTML('beforeend', this.template);
  };
}
