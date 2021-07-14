class DomManipulator {
  $el: HTMLElement;

  constructor(selector: string | HTMLElement) {
    this.$el =
      typeof selector === 'string'
        ? document.querySelector(selector)!
        : selector;
  }

  html = (content: string) => {
    this.$el.innerHTML = content;
  };

  on = (evType: string, f: EventListenerOrEventListenerObject) => {
    this.$el.addEventListener(evType, f);
  };

  off = (evType: string, f: EventListenerOrEventListenerObject) => {
    this.$el.removeEventListener(evType, f);
  };
}

/**
 * API
 * @example
 *  $('.root') - get element and return wrapped native dom element.
 * @example
 *  $.create('div', 'root') - create div element and return ^.
 * @returns {DomManipulator($el)} return wrapped element.
 */

export const $ = (selector: string | HTMLElement) =>
  new DomManipulator(selector);

$.create = (tag: string, cls: string) => {
  const el = document.createElement(tag);
  if (cls) {
    el.classList.add(cls);
  }

  return $(el);
};
