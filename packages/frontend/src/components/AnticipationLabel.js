import { theme } from '@hash-mono/stylesystem';
import getAnticipation from '@hash-mono/financial-calculator';

class AnticipationLabel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.customStyle = {};
    this.requiredAttributes = ['sale-value', 'installments', 'mdr', 'days'];
    this.computedValue = 0;
  }

  static get observedAttributes() {
    return ['sale-value', 'installments', 'mdr', 'days'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this[attr] = Number(newValue);
    const areAllInputsValid = this.requiredAttributes
      .every((reqAttr) => this[reqAttr] && this[reqAttr] > 0);

    if (areAllInputsValid) {
      const computedValue = getAnticipation(this['sale-value'], this.installments, this.mdr, this.days);
      this.computedValue = computedValue;
    } else {
      this.computedValue = 0;
    }

    this.render();
  }

  getFormattedValue() {
    return this.computedValue
      .toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
  }

  getDaysLabel() {
    return this.days > 1 ? `Em ${this.days} dias` : 'Amanhã';
  }

  render() {
    this.shadowRoot.innerHTML = `
      <h-text
        color="${theme.colors.blue[1]}"
        font-size="${theme.fontSizes[2]}"
        font-style="italic"
      >
        ${this.getDaysLabel()}: <h-text font-size="inherit" color="inherit" font-weight="bold">${this.getFormattedValue()}</h-text>
      </h-text>
    `;
  }
}

export default AnticipationLabel;
