import BaseBox from './BaseBox';

class Box extends BaseBox {
  render() {
    return `
      <style>
        :host {
          ${this.getStyles()}
        }
      </style>
      <slot></slot>
    `;
  }
}

export default Box;
