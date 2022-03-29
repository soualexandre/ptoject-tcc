import { darken, lighten } from '~/modules';
import { projectColors } from './whiteLabelTheme/whiteLabel';

const {
  primary,
  secondary,
  tertiary,
  dark,
  success,
  text,
  warning,
  failure,
  info,
} = projectColors;

export default {
  text,
  dark,
  border: '#00000098',
  borderOpacity: '#00000050',
  gray: '#828282',
  placeholder: '#DADADA',
  primary: {
    light: lighten(0.05, primary),
    lighter: '#6EB98699',
    main: primary,
    dark: darken(0.12, primary),
    contrast: '#ffffff',
  },
  secondary: {
    light: lighten(0.05, secondary),
    main: secondary,
    dark: darken(0.1, secondary),
    shadow: darken(0.1, dark),
    contrast: '#f2f2f2',
  },
  tertiary: {
    light: lighten(0.15, tertiary),
    main: tertiary,
    dark: darken(0.1, tertiary),
    contrast: '#ffffff',
  },
  texts: {
    light: '#00000080',
    main: '#2E2E2E',
    dark: '#000000',
    contrast: '#ffffff',
  },
  info: {
    light: '#7295EE33',
    main: info,
    dark: darken(0.1, info),
    contrast: '#ffffff',
  },
  warning: {
    light: '#F6C95333',
    main: warning,
    dark: darken(0.1, warning),
    contrast: '#ffffff',
  },
  failure: {
    light: '#FC585899',
    main: failure,
    dark: darken(0.1, failure),
    contrast: '#ffffff',
  },
  success: {
    light: '#7CC88833',
    main: success,
    dark: darken(0.1, success),
    contrast: '#ffffff',
  },
  autoComplete: {
    input: '#eee',
    border: '#ccc',
  },
};
