export default {
  title: 'h-currency-input',
};

export const currencyInput = () => '<h-currency-input></h-currency-input>';

export const usingOnCustomChangeCallback = () => {
  const wrapper = document.createElement('div');
  const descriptionEl = document.createElement('p');
  descriptionEl.innerText = 'Usage: inputEl.onCustomChange = (id, newValue) => alert(id, newValue)';
  const inputEl = document.createElement('h-currency-input');
  inputEl.setAttribute('id', 'testId');
  // eslint-disable-next-line no-alert
  inputEl.onCustomChange = (id, newValue) => alert(`input with id ${id} now has the value ${newValue}`);
  wrapper.append(descriptionEl);
  wrapper.append(inputEl);
  return wrapper;
};
