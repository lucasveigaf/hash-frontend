import { theme } from '@hash-mono/stylesystem';

class Anticipation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.handleChange = this.handleChange.bind(this);
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.render();

    ['sale-value', 'installments', 'mdr'].forEach((id) => {
      this.shadowRoot.getElementById(id).onCustomChange = this.handleChange;
    });
  }

  handleChange(id, newValue) {
    this[id] = newValue;
    const anticipationLabels = this.shadowRoot.querySelectorAll('h-anticipation-label');

    anticipationLabels.forEach((label) => {
      label.setAttribute('sale-value', this['sale-value']);
      label.setAttribute('mdr', this.mdr);
      label.setAttribute('installments', this.installments);
    });
  }

  render() {
    return `
      <h-flex
        background-color="#FFFFFF"
        width="608px"
        height="389px"
        border="1px solid #D1DCE3"
        border-radius="4px"
      >
        <h-flex
          flex-direction="column"
          width="100%"
          justify-content="center"
          align-items="center"
        >
          <h-box width="300px">
            <h-text font-size="${theme.fontSizes[4]}" font-weight="bold">
              Simule sua Antecipação
            </h-text>
            <h-box margin-bottom="26px" margin-top="22px">
              <h-currency-input
                id="sale-value"
                label="Informe o valor da venda *"
                min="0"
              ></h-currency-input>
            </h-box>
            <h-box margin-bottom="26px">
              <h-input
                id="installments"
                type="number"
                label="Em quantas parcelas *"
                subtitle="Máximo de 12 parcelas"
                min="1"
                max="12"
              ></h-input>
            </h-box>
            <h-box>
              <h-input
                label="Informe o percentual de MDR *"
                id="mdr"
                type="number"
                min="1"
                max="100"
              ></h-input>
            </h-box>
          </h-box>
        </h-flex>
        <h-flex
          flex-direction="column"
          width="231px"
          background-color="${theme.colors.grey[2]}"
          padding-top="83px"
          padding-right="35px"
          padding-bottom="83px"
          padding-left="35px"
        >
          <h-text
            font-style="italic"
            font-size="${theme.fontSizes[2]}"
            font-weight="bold"
            color="${theme.colors.blue[0]}"
          >
            VOCÊ RECEBERÁ:
          </h-text>
          <h-divisor color="${theme.colors.blue[1]}" font-size="${theme.fontSizes[2]}"></h-divisor>
          <h-box margin-bottom="22px" margin-top="26px">
            <h-anticipation-label
              id="anticipation-label-1"
              sale-value="${this['sale-value']}"
              mdr="${this.mdr}"
              installments="${this.installments}"
              days="1"
            ></h-anticipation-label>
          </h-box>
          <h-box margin-bottom="26px">
            <h-anticipation-label
              sale-value="${this['sale-value']}"
              mdr="${this.mdr}"
              installments="${this.installments}"
              days="15"
            ></h-anticipation-label>
          </h-box>
          <h-box margin-bottom="26px">
            <h-anticipation-label
              sale-value="${this['sale-value']}"
              mdr="${this.mdr}"
              installments="${this.installments}"
              days="30"
            ></h-anticipation-label>
          </h-box>
          <h-anticipation-label
            sale-value="${this['sale-value']}"
            mdr="${this.mdr}"
            installments="${this.installments}"
            days="90"
          ></h-anticipation-label>
        </h-flex>
      </h-flex>
    `;
  }
}

export default Anticipation;
