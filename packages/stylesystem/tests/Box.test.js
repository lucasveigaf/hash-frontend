describe('h-box', () => {
  const getComponent = () => document.body.querySelector('h-box');

  beforeEach(() => {
    const element = document.createElement('h-box');
    document.body.append(element);
  });

  afterEach(() => {
    document.body.querySelector('h-box').remove();
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
});
