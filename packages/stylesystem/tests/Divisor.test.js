describe('h-divisor', () => {
  const getComponent = () => document.body.querySelector('h-divisor');

  beforeEach(() => {
    const element = document.createElement('h-divisor');
    document.body.append(element);
  });

  afterEach(() => {
    document.body.querySelector('h-divisor').remove();
  });

  it('should render', () => {
    expect(getComponent()).toBeTruthy();
  });

  it('should render a hr', () => {
    const component = getComponent();
    const hr = component.shadowRoot.querySelector('hr');

    expect(hr).toBeTruthy();
  });

  it('should accept its custom attributes for styling the <hr>', () => {
    const component = getComponent();
    component.setAttribute('color', 'rgb(255, 255, 0)');
    component.setAttribute('height', '3px');

    const hr = component.shadowRoot.querySelector('hr');
    const hrStyles = getComputedStyle(hr);

    expect(hrStyles.getPropertyValue('border')).toBe('3px solid rgb(255, 255, 0)');
  });
});
