describe('h-input', () => {
  const getComponent = () => document.body.querySelector('h-input');

  const updateValue = async (input, newValue) => {
    // eslint-disable-next-line no-param-reassign
    input.value = newValue;
    input.dispatchEvent(new Event('keyup'));
  };

  beforeEach(() => {
    const element = document.createElement('h-input');
    document.body.append(element);
  });

  afterEach(() => {
    document.body.querySelector('h-input').remove();
  });

  it('should render', () => {
    expect(getComponent()).toBeTruthy();
  });

  it('should render a subtitle when it is set', () => {
    const component = getComponent();

    expect(component.shadowRoot.querySelector('h-text')).toBeFalsy();

    component.setAttribute('subtitle', 'subtitle test');
    const subtitleText = component.shadowRoot.querySelector('h-text').innerText;

    expect(subtitleText).toBe('subtitle test');
  });

  it('should render a label when it is set', () => {
    const component = getComponent();

    expect(component.shadowRoot.querySelector('label')).toBeFalsy();

    component.setAttribute('label', 'label test');
    const labelText = component.shadowRoot.querySelector('label').innerText;

    expect(labelText).toBe('label test');
  });

  it('should not allow numbers over the max attribute when it is set and type is number', async () => {
    const element = document.createElement('div');
    element.innerHTML = '<h-input id="teste" type="number" max="12"></h-input>';
    document.body.append(element);
    const input = document.body.querySelector('#teste').shadowRoot.querySelector('input');
    updateValue(input, '13');

    expect(input.value).toBe('12');
    element.remove();
  });

  it('should not allow numbers below the min attribute when it is set and type is number', async () => {
    const element = document.createElement('div');
    element.innerHTML = '<h-input id="test" type="number" min="3"></h-input>';
    document.body.append(element);

    const input = document.body.querySelector('#test').shadowRoot.querySelector('input');
    updateValue(input, '2');

    expect(input.value).toBe('3');
    element.remove();
  });

  it('should trigger onCustomChange when it is set', async () => {
    let wasCalled = false;

    const element = document.createElement('div');
    element.innerHTML = '<h-input id="test" type="number" min="3"></h-input>';
    document.body.append(element);

    const hInput = document.body.querySelector('#test');
    hInput.onCustomChange = () => {
      wasCalled = true;
    };

    const input = hInput.shadowRoot.querySelector('input');

    expect(wasCalled).toBe(false);

    updateValue(input, '10');

    expect(wasCalled).toBe(true);

    element.remove();
  });
});
