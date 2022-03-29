import lodash from 'lodash';

export const getTheme =
  (themeProp: string) =>
  ({ theme }: any): string =>
    lodash.get(theme, themeProp);
