export default {
  title: 'h-text',
};

const defaultInner = 'Lorem ipsum';

export const defaultStyles = () => `<h-text>${defaultInner}</h-text>`;

export const customColor = () => `<h-text color="red">${defaultInner}</h-text>`;

export const customFontSize = () => `<h-text font-size="28px">${defaultInner}</h-text>`;

export const customFontStyle = () => `<h-text font-style="italic">${defaultInner}</h-text>`;

export const customFontWeight = () => `<h-text font-weight="bold">${defaultInner}</h-text>`;
