import theme from '../theme';

class Input extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.handleChange = this.handleChange.bind(this);
    this.render();
  }

  static get observedAttributes() {
    return ['type', 'label', 'subtitle', 'min', 'max'];
  }

  connectedCallback() {
    this.input = this.shadowRoot.querySelector('input');
    this.input.addEventListener('keyup', this.handleChange);
  }

  handleChange(event) {
    if (this.type === 'number') {
      const { max, min } = this;
      const newValue = event.target.value;

      if (max && newValue) {
        this.input.value = Number(event.target.value) > max ? max : event.target.value;
      }

      if (min && newValue) {
        this.input.value = Number(event.target.value) < min ? min : event.target.value;
      }
    }

    if (this.onCustomChange) {
      this.onCustomChange(this.id, this.input.value);
    }
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this[attr] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        input {
          border: 1px solid ${theme.colors.grey[5]};
          border-radius: ${theme.borderRadius};
          font-size: ${theme.fontSizes[1]};
          font-family: ${theme.fontFamily};
          padding: 11px 14px 11px 14px
        }
        input:focus {
          border: 1px solid ${theme.colors.blue[2]};
          outline: none;
        }
        input[type="number"] {
          width: initial;
       }
        label {
          font-size: ${theme.fontSizes[1]};
          font-family: ${theme.fontFamily};
          color: ${theme.colors.grey[0]};
          margin-bottom: 4px;
        }
      </style>
      <h-flex flex-direction="column">
        ${this.label ? `<label for="${this.id}">${this.label}</label>` : ''}
        <input id="${this.id}" type=${this.type} max="${this.max}" min="${this.min}"></input>
        ${this.subtitle
    ? (
      `<h-text
        color="${theme.colors.grey[3]}"
        font-size="${theme.fontSizes[0]}"
        font-weight="bold">
          ${this.subtitle}
      </h-text>`
    ) : ''
}
      </h-flex>
    `;
  }
}

export default Input;
