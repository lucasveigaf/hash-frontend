describe('h-anticipation', () => {
  const getInput = (id) => document.body
    .querySelector('h-anticipation').shadowRoot
    .querySelector(`#${id}`).shadowRoot
    .querySelector('input');

  const getSaleValueInput = () => document.body
    .querySelector('h-anticipation').shadowRoot
    .querySelector('#sale-value').shadowRoot
    .querySelector('h-input').shadowRoot
    .querySelector('input');

  const updateValue = (input, newValue) => {
    // eslint-disable-next-line no-param-reassign
    input.value = newValue;
    input.dispatchEvent(new Event('keyup'));
  };

  const getLocalizedCurrency = (value) => (
    value.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
  );

  const getAnticipationValueText = (days) => (
    document.body
      .querySelector('h-anticipation').shadowRoot
      .querySelector(`h-anticipation-label[days="${days}"]`).shadowRoot
      .querySelector('h-text').innerText
  );

  beforeEach(() => {
    const element = document.createElement('h-anticipation');
    document.body.append(element);
  });

  afterEach(() => {
    document.body.querySelector('h-anticipation').remove();
  });

  it('should render', () => {
    expect(document.body.querySelector('h-anticipation')).toBeTruthy();
  });

  it('shouldnt allow any number input value to be negative', () => {
    const installmentsInput = getInput('installments');
    const mdrInput = getInput('mdr');

    updateValue(installmentsInput, '-12');

    expect(installmentsInput.value).toBe('1');

    updateValue(mdrInput, '-12');

    expect(mdrInput.value).toBe('1');
  });

  it('should update earning feedback when the sale value changes', () => {
    const saleValueInput = getSaleValueInput();
    const installmentsInput = getInput('installments');
    const mdrInput = getInput('mdr');

    updateValue(saleValueInput, '15000');
    updateValue(installmentsInput, '3');
    updateValue(mdrInput, '4');

    const originalValue = getAnticipationValueText(1);

    expect(originalValue).toContain(getLocalizedCurrency(132.67));

    updateValue(saleValueInput, '20000');

    const newValue = getAnticipationValueText(1);

    expect(newValue).toContain(getLocalizedCurrency(176.90));
  });

  it('should update earning feedback when the installments value changes', () => {
    const saleValueInput = getSaleValueInput();
    const installmentsInput = getInput('installments');
    const mdrInput = getInput('mdr');

    updateValue(saleValueInput, '15000');
    updateValue(installmentsInput, '3');
    updateValue(mdrInput, '4');

    const originalValue = getAnticipationValueText(1);

    expect(originalValue).toContain(getLocalizedCurrency(132.67));

    updateValue(installmentsInput, '4');

    const newValue = getAnticipationValueText(1);

    expect(newValue).toContain(getLocalizedCurrency(129.79));
  });

  it('should update earning feedbacks when the mdr value changes', () => {
    const saleValueInput = getSaleValueInput();
    const installmentsInput = getInput('installments');
    const mdrInput = getInput('mdr');

    updateValue(saleValueInput, '15000');
    updateValue(installmentsInput, '3');
    updateValue(mdrInput, '4');

    const originalValue = getAnticipationValueText(1);

    expect(originalValue).toContain(getLocalizedCurrency(132.67));

    updateValue(mdrInput, '5');

    const newValue = getAnticipationValueText(1);

    expect(newValue).toContain(getLocalizedCurrency(128.49));
  });
});
