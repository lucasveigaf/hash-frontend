import theme from '../theme';

class Divisor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['color', 'height'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        hr {
          border: ${this.getAttribute('height') || '1px'} solid ${this.getAttribute('color') || theme.colors.grey};
          opacity: 0.3;
          margin: 4px;
        }
      </style>
      <hr/>
    `;
  }
}

export default Divisor;
