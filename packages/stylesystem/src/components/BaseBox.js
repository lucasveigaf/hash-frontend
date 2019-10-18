class BaseBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.customStyles = { display: 'block' };
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.render();
  }

  static get observedAttributes() {
    return [
      'background-color',
      'border',
      'border-radius',
      'width',
      'height',
      'm',
      'margin-top',
      'margin-bottom',
      'margin-left',
      'margin-right',
      'p',
      'padding-top',
      'padding-bottom',
      'padding-left',
      'padding-right',
    ];
  }

  getStyleProperty(prop) {
    return `${prop}: ${this.customStyles[prop] || 'unset'};`;
  }

  getStyles() {
    return Object.keys(this.customStyles).reduce((acc, curr) => acc.concat(this.getStyleProperty(curr)), '');
  }

  updateAllDirections(attr, newValue) {
    ['top', 'right', 'bottom', 'left'].forEach((direction) => {
      this.customStyles[`${attr}-${direction}`] = newValue;
    });
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'm') {
      this.updateAllDirections('margin', newValue);
    } else if (attr === 'p') {
      this.updateAllDirections('padding', newValue);
    }

    this.customStyles[attr] = newValue;
    this.shadowRoot.innerHTML = this.render();
  }
}

export default BaseBox;
