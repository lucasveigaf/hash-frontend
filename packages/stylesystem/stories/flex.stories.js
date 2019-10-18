export default {
  title: 'h-flex',
};

const defaultInner = `
  <h-box width="80px" height="80px" background-color="red">first h-box</h-box>
  <h-box width="80px" height="80px" background-color="green">second h-box</h-box>
  <h-box width="80px" height="80px" background-color="blue">third h-box</h-box>
`;

export const defaultStyles = () => `<h-flex background-color="lightgrey">${defaultInner}</h-flex>`;

export const customColumnDirection = () => `
  <h-flex background-color="lightgrey" flex-direction="column">${defaultInner}</h-flex>
`;

export const customJustifyContent = () => `
  <h-flex height="200px" background-color="lightgrey" justify-content="center">${defaultInner}</h-flex>
`;

export const customAlignItems = () => `
  <h-flex height="200px" background-color="lightgrey" align-items="center">${defaultInner}</h-flex>
`;
