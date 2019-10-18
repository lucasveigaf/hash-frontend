describe('h-flex', () => {
  const getComponent = () => document.body.querySelector('h-flex');

  beforeEach(() => {
    const element = document.createElement('h-flex');
    document.body.append(element);
  });

  afterEach(() => {
    document.body.querySelector('h-flex').remove();
  });

  it('should render', () => {
    expect(getComponent()).toBeTruthy();
  });

  it('should render its children', () => {
    const component = getComponent();
    const child = document.createElement('div');
    child.setAttribute('id', 'myChild');
    component.append(child);

    expect(component.firstElementChild.id).toBe('myChild');
  });

  it('should have style property display set as flex', () => {
    const component = getComponent();
    const displayProp = getComputedStyle(component).getPropertyValue('display');

    expect(displayProp).toBe('flex');
  });

  it('should accept its own custom attributes', () => {
    const component = getComponent();

    const originalStyles = getComputedStyle(component);

    expect(originalStyles.getPropertyValue('justify-content')).toBe('normal');
    expect(originalStyles.getPropertyValue('align-items')).toBe('normal');
    expect(originalStyles.getPropertyValue('flex-direction')).toBe('row');

    component.setAttribute('justify-content', 'center');
    component.setAttribute('align-items', 'center');
    component.setAttribute('flex-direction', 'column');

    const newStyles = getComputedStyle(component);

    expect(newStyles.getPropertyValue('justify-content')).toBe('center');
    expect(newStyles.getPropertyValue('align-items')).toBe('center');
    expect(newStyles.getPropertyValue('flex-direction')).toBe('column');
  });
});
