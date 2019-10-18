describe('h-text', () => {
  const getComponent = () => document.body.querySelector('h-text');

  beforeEach(() => {
    const element = document.createElement('h-text');
    element.innerHTML = 'test text';
    document.body.append(element);
  });

  afterEach(() => {
    document.body.querySelector('h-text').remove();
  });

  it('should render', () => {
    expect(getComponent()).toBeTruthy();
  });

  it('should render its inner text', () => {
    const component = getComponent();
    component.innerHTML = '<span>testing<span>';

    expect(component.innerText).toBe('testing');
  });

  it('should accept font-style and font-weight attributes for styling the webcomponent', () => {
    const component = getComponent();
    const originalStyles = getComputedStyle(component);

    expect(originalStyles.getPropertyValue('font-style')).toBe('normal');
    expect(originalStyles.getPropertyValue('font-weight')).toBe('400');
    expect(originalStyles.getPropertyValue('color')).toBe('rgb(101, 101, 101)');
    expect(originalStyles.getPropertyValue('font-size')).toBe('14px');

    component.setAttribute('font-style', 'italic');
    component.setAttribute('font-weight', 'bold');
    component.setAttribute('color', 'red');
    component.setAttribute('font-size', '21px');

    const updatedStyles = getComputedStyle(component);

    expect(updatedStyles.getPropertyValue('font-style')).toBe('italic');
    expect(updatedStyles.getPropertyValue('font-weight')).toBe('700');
    expect(originalStyles.getPropertyValue('color')).toBe('rgb(255, 0, 0)');
    expect(originalStyles.getPropertyValue('font-size')).toBe('21px');
  });
});
