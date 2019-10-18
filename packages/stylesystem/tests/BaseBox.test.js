import BaseBox from '../src/components/BaseBox';

class TestBaseBox extends BaseBox {
  render() {
    return `
      <style>
        :host {
          ${this.getStyles()}
        }
      </style>
      <div></div>
    `;
  }
}

customElements.define('h-test-base-box', TestBaseBox);

describe('BaseBox', () => {
  const getComponent = () => document.body.querySelector('h-test-base-box');

  beforeEach(() => {
    const element = document.createElement('h-test-base-box');
    document.body.append(element);
  });

  afterEach(() => {
    document.body.querySelector('h-test-base-box').remove();
  });

  it('should render its extended webcomponent', () => {
    expect(getComponent()).toBeTruthy();
  });

  it('should provide the default attrs to the extended webcomponent', () => {
    const component = getComponent();
    component.setAttribute('margin-top', '10px');
    component.setAttribute('margin-right', '11px');
    component.setAttribute('margin-bottom', '12px');
    component.setAttribute('margin-left', '13px');
    component.setAttribute('padding-top', '14px');
    component.setAttribute('padding-right', '15px');
    component.setAttribute('padding-bottom', '16px');
    component.setAttribute('padding-left', '17px');
    component.setAttribute('border', '1px solid rgb(209, 220, 227)');
    component.setAttribute('border-radius', '5px');
    component.setAttribute('width', '500px');
    component.setAttribute('height', '600px');

    const styles = getComputedStyle(component);

    expect(styles.getPropertyValue('margin-top')).toBe('10px');
    expect(styles.getPropertyValue('margin-right')).toBe('11px');
    expect(styles.getPropertyValue('margin-bottom')).toBe('12px');
    expect(styles.getPropertyValue('margin-left')).toBe('13px');
    expect(styles.getPropertyValue('padding-top')).toBe('14px');
    expect(styles.getPropertyValue('padding-right')).toBe('15px');
    expect(styles.getPropertyValue('padding-bottom')).toBe('16px');
    expect(styles.getPropertyValue('padding-left')).toBe('17px');
    expect(styles.getPropertyValue('border-radius')).toBe('5px');
    expect(styles.getPropertyValue('width')).toBe('500px');
    expect(styles.getPropertyValue('height')).toBe('600px');
  });

  it('should update all margins when m is set', () => {
    const component = getComponent();
    component.setAttribute('m', '15px');

    const styles = getComputedStyle(component);

    expect(styles.getPropertyValue('margin-top')).toBe('15px');
    expect(styles.getPropertyValue('margin-right')).toBe('15px');
    expect(styles.getPropertyValue('margin-bottom')).toBe('15px');
    expect(styles.getPropertyValue('margin-left')).toBe('15px');
  });

  it('should update all paddings when p is set', () => {
    const component = getComponent();
    component.setAttribute('p', '25px');

    const styles = getComputedStyle(component);

    expect(styles.getPropertyValue('padding-top')).toBe('25px');
    expect(styles.getPropertyValue('padding-right')).toBe('25px');
    expect(styles.getPropertyValue('padding-bottom')).toBe('25px');
    expect(styles.getPropertyValue('padding-left')).toBe('25px');
  });
});
