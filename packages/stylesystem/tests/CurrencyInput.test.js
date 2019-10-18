describe('h-currency-input', () => {
  const getComponent = () => document.body.querySelector('h-currency-input');

  const updateValue = async (input, newValue) => {
    // eslint-disable-next-line no-param-reassign
    input.value = newValue;
    input.dispatchEvent(new Event('keyup'));
  };

  beforeEach(() => {
    const element = document.createElement('h-currency-input');
    document.body.append(element);
  });

  afterEach(() => {
    document.body.querySelector('h-currency-input').remove();
  });

  it('should render', () => {
    expect(getComponent()).toBeTruthy();
  });

  it('should render a subtitle when it is set', () => {
    const element = document.createElement('div');
    element.innerHTML = '<h-currency-input id="test" subtitle="subtitle test"></h-currency-input>';
    document.body.append(element);
    const subtitle = document.body.querySelector('#test').shadowRoot
      .querySelector('h-input').shadowRoot
      .querySelector('h-text');

    expect(subtitle.innerText).toBe('subtitle test');
    element.remove();
  });


  it('should render a label when it is set', () => {
    const element = document.createElement('div');
    element.innerHTML = '<h-currency-input id="test" label="label test"></h-currency-input>';
    document.body.append(element);
    const label = document.body.querySelector('#test').shadowRoot
      .querySelector('h-input').shadowRoot
      .querySelector('label');

    expect(label.innerText).toBe('label test');
    element.remove();
  });

  it('should trigger onCustomChange when it is set and return id and new value', async () => {
    let callbackValue = '';
    let callbackId = '';

    const element = document.createElement('div');
    element.innerHTML = '<h-currency-input id="test" type="number" min="3"></h-currency-input>';
    document.body.append(element);

    const hInput = document.body.querySelector('#test');
    hInput.onCustomChange = (id, value) => {
      callbackId = id;
      callbackValue = value;
    };

    const input = hInput.shadowRoot.querySelector('h-input').shadowRoot.querySelector('input');

    expect(callbackValue).toBe('');
    expect(callbackId).toBe('');

    updateValue(input, '1000');

    expect(callbackValue).toBe(10);
    expect(callbackId).toBe('test');

    element.remove();
  });
});
