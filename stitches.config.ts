/* eslint-disable no-tabs */
import { createStitches } from '@stitches/react';

const {
  theme: darkTheme,
  styled,
  keyframes,
  css,
  globalCss,
  reset,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      primaryA: 'hsl(233, 20%, 16%)',
      primaryB: '#FFFFFF',
      accent: '#276EF1',
      negative: '#E11900',
      warning: '#FFC043',
      positive: '#048848',
      divider: '#444',
      gray50: '#242933',
      gray100: '#222730',
      gray200: '#191D24',
      gray300: '#111318',
      background: '#111318',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 620px)',
    bp3: '(min-width: 720px)',
    bp4: '(min-width: 970px)',
    bp5: '(min-width: 1100px)',
  },
});

const { theme: lightTheme } = createStitches({
  theme: {
    colors: {
      primaryA: '#FFFFFF',
      primaryB: '#000000',
      divider: '#ccc',
      gray50: '#FFFFFF',
      gray100: '#F5F5F5',
      gray200: '#EEEEEE',
      gray300: '#D1D1D1',
      background: '#FFFFFF',
    },
  },
});

export {
  darkTheme,
  lightTheme,
  styled,
  css,
  keyframes,
  globalCss,
  reset,
  getCssText,
};