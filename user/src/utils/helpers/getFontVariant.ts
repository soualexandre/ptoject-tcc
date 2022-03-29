import { scaled } from './fontRFValue';
import { getTheme } from './themeHelper';

export const getFontSize = (props: any): any =>
  scaled(getTheme(`${props.variant}.fontSize`)(props));

export const getLineHeight = (props: any): any =>
  scaled(getTheme(`${props.variant}.lineHeight`)(props));
