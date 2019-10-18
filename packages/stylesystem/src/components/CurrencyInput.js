import masker from 'vanilla-masker';

class CurrencyInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <h-input
        ${this.getAttr('id')}
        ${this.getAttr('min')}
        ${this.getAttr('max')}
        ${this.getAttr('label')}
        ${this.getAttr('subtitle')}></h-input>
    `;

    this.hInput = this.shadowRoot.querySelector('h-input');

    this.setupMask();
    this.setupCustomChange();
  }

  getAttr(attr) {
    return this.getAttribute(attr) ? `${attr}="${this.getAttribute(attr)}"` : '';
  }

  setupMask() {
    const input = this.hInput.shadowRoot.querySelector('input');
    masker(input).maskMoney({
      precision: 2,
      separator: ',',
      delimiter: '.',
      unit: 'R$',
    });
  }

  setupCustomChange() {
    this.hInput.onCustomChange = (id, newValue) => {
      if (this.onCustomChange) {
        const unmaskedValue = Number(masker.toNumber(newValue)) / 100;
        this.onCustomChange(id, unmaskedValue);
      }
    };
  }
}

export default CurrencyInput;
