export default {
  title: 'h-input',
};

export const input = () => '<h-input></h-input>';

export const withLabel = () => '<h-input label="label test"></h-input>';

export const withSubtitle = () => '<h-input subtitle="subtitle test"></h-input>';

export const withType = () => '<h-input type="number"></h-input>';

export const withMaxNumberValueAs3 = () => '<h-input max="3"type="number"></h-input>';

export const withMinNumberValueAs1 = () => '<h-input min="1"type="number"></h-input>';

export const usingOnCustomChangeCallback = () => {
  const wrapper = document.createElement('div');
  const descriptionEl = document.createElement('p');
  descriptionEl.innerText = 'Usage: inputEl.onCustomChange = (id, newValue) => alert(id, newValue)';
  const inputEl = document.createElement('h-input');
  inputEl.setAttribute('id', 'testId');
  // eslint-disable-next-line no-alert
  inputEl.onCustomChange = (id, newValue) => alert(`input with id ${id} now has the value ${newValue}`);
  wrapper.append(descriptionEl);
  wrapper.append(inputEl);
  return wrapper;
};
