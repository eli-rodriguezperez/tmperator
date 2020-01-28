import { css } from 'lit-element';

export default css`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');

  body {
    height: 100%
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
  }
`;

export const colors = {
  primaryColor: '#ff715b',
  secondaryColor: '#1ea896',

  secondaryMinusTwo: '#157669',
  secondaryMinusOne: '#198e7f',
  secondaryPlusOne: '#23c5af',
  secondaryPlusTwo: '#27ddc5',

  lowContrastLight: '#cccccc',
  lowContrastDark: '#727e7e',

  bodyDark: '#4c5454',
  bodyLight: '#ffffff',
};

export const statusColors = {
  info: '#501ea8',
  success: colors.secondaryColor,
  error: '#a81d30',
  disable: '#85a8a3',
  warning: '#a8921e',
};
