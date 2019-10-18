import BaseBox from './BaseBox';

class Flex extends BaseBox {
  static get observedAttributes() {
    return [...super.observedAttributes, 'justify-content', 'align-items', 'flex-direction'];
  }

  render() {
    return `
      <style>
        :host {
          ${this.getStyles()}
          display: flex;
        }
      </style>
      <slot></slot>
    `;
  }
}

export default Flex;
