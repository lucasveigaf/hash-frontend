describe('h-anticipation-label', () => {
  const getComponentText = () => (
    document.body.querySelector('h-anticipation-label').shadowRoot.querySelector('h-text').innerText
  );

  const getComponent = () => document.body.querySelector('h-anticipation-label');

  beforeEach(() => {
    const element = document.createElement('h-anticipation-label');
    document.body.append(element);
  });

  afterEach(() => {
    document.body.querySelector('h-anticipation-label').remove();
  });

  it('should render', () => {
    expect(document.body.querySelector('h-anticipation-label')).toBeTruthy();
  });

  it('should render "amanhã" if days <= 1', () => {
    const innerText = getComponentText();

    expect(innerText).toContain('Amanhã');
  });

  it('should render number of days if days > 1', () => {
    const component = getComponent();
    component.setAttribute('days', '10');

    const innerText = getComponentText();

    expect(innerText).toContain('Em 10 dias:');
  });

  it('should render the expected anticipation value according to the attributes', () => {
    const component = getComponent();
    component.setAttribute('days', '15');
    component.setAttribute('sale-value', '150');
    component.setAttribute('mdr', '4');
    component.setAttribute('installments', '3');

    const innerText = getComponentText();

    expect(innerText).toContain('135,36');
  });

  ['sale-value', 'mdr', 'installments'].forEach((attr) => {
    it(`should render the value as 0,00 when ${attr} is <= 0`, () => {
      const component = getComponent();
      component.setAttribute('days', '15');
      component.setAttribute('sale-value', '150');
      component.setAttribute('mdr', '4');
      component.setAttribute('installments', '3');

      const innerText = getComponentText();

      expect(innerText).toContain('135,36');

      component.setAttribute(attr, '0');
      const updateText = getComponentText();

      expect(updateText).toContain('0,00');
    });
  });

  it('should render localized currency in real', () => {
    const expectedValue = 0
      .toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });

    const innerText = getComponentText();

    expect(innerText).toContain(expectedValue);
  });
});
