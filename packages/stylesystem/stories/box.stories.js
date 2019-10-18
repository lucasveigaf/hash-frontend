export default {
  title: 'h-box',
};

const defaultInner = '<p>I am inside the h-box</p>';

export const defaultStyles = () => `<h-box background-color="lightgrey">${defaultInner}</h-box>`;

export const customPaddingViaPTag = () => `
  <h-box background-color="lightgrey" p="30px">${defaultInner}</h-box>
`;

export const customPaddingTop = () => `
  <h-box background-color="lightgrey" padding-top="30px">${defaultInner}</h-box>
`;

export const customPaddingRight = () => `
  <h-box background-color="lightgrey" padding-right="30px">${defaultInner}</h-box>
`;

export const customPaddingBottom = () => `
  <h-box background-color="lightgrey" padding-bottom="30px">${defaultInner}</h-box>
`;

export const customPaddingLeft = () => `
  <h-box background-color="lightgrey" padding-left="30px">${defaultInner}</h-box>
`;

export const customMarginViaMTag = () => `
  <h-box background-color="lightgrey" m="30px">${defaultInner}</h-box>
`;

export const customMarginTop = () => `
  <h-box background-color="lightgrey" margin-top="30px">${defaultInner}</h-box>
`;

export const customMarginRight = () => `
  <h-box background-color="lightgrey" margin-right="30px">${defaultInner}</h-box>
`;

export const customMarginBottom = () => `
  <h-box background-color="lightgrey" margin-bottom="30px">${defaultInner}</h-box>
`;

export const customMarginLeft = () => `
  <h-box background-color="lightgrey" margin-left="30px">${defaultInner}</h-box>
`;

export const customWidth = () => `
  <h-box background-color="lightgrey" width="200px">${defaultInner}</h-box>
`;

export const customHeight = () => `
  <h-box background-color="lightgrey" height="200px">${defaultInner}</h-box>
`;

export const customBackgroundColor = () => `
  <h-box background-color="red">${defaultInner}</h-box>
`;

export const customBorder = () => `
  <h-box border="1px solid red">${defaultInner}</h-box>
`;

export const customBorderRadius = () => `
  <h-box border="1px solid red" border-radius="9px">${defaultInner}</h-box>
`;
