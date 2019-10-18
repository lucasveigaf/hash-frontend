import theme from '../theme';

class Text extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.customStyle = {};
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['color', 'font-size', 'font-style', 'font-weight'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this.customStyle[attr] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          font-family: ${theme.fontFamily};
          font-size: ${this.customStyle['font-size'] || theme.fontSizes[1]};
          font-style: ${this.customStyle['font-style'] || 'unset'};
          font-weight: ${this.customStyle['font-weight'] || 'unset'};
          color: ${this.customStyle.color || theme.colors.grey[0]};
        }
      </style>
      <slot></slot>
    `;
  }
}

export default Text;
