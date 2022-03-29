import { LOCALE, LOCALE_TYPE } from '../utils';
import en from './translation/en.json';
import pt_AO from './translation/pt-AO.json';
import pt_BR from './translation/pt-BR.json';

type Locales = LOCALE_TYPE.PT_AO | LOCALE_TYPE.PT_BR | LOCALE_TYPE.EN;

const locales: { [key: string]: Record<any, unknown> } = {
  pt_BR,
  pt_AO,
  en,
};

const DEFAULT = LOCALE_TYPE.PT_AO;

const deviceIdentifierLocale: string = LOCALE;

const handleDeviceLocale = () => {
  if (
    deviceIdentifierLocale === LOCALE_TYPE.EN_US ||
    deviceIdentifierLocale === LOCALE_TYPE.EN_UK ||
    deviceIdentifierLocale === LOCALE_TYPE.EN_IN
  ) {
    return LOCALE_TYPE.EN;
  }
  if (
    deviceIdentifierLocale === LOCALE_TYPE.PT_US ||
    deviceIdentifierLocale === LOCALE_TYPE.PT
  ) {
    return LOCALE_TYPE.PT_AO;
  }

  return deviceIdentifierLocale;
};

const deviceLocale = handleDeviceLocale();

const hasLocaleFile = () => Object.keys(locales).includes(deviceLocale);

const defaultLocale = (hasLocaleFile() ? deviceLocale : DEFAULT) as Locales;

export const handleLocation = () => {
  let locale: Locales = defaultLocale;

  const get = (): Locales => locale;

  const set = (_locale: Locales) => {
    locale = _locale;
  };

  return { get, set };
};

export function strings(name: string) {
  const splitted = name.split('.');

  const locale = handleLocation().get();

  let str: any = locales[locale];
  splitted.forEach((value) => {
    if (!str[value]) {
      str = `Missing translation "${name}" for locale "${locale}"`;
      return;
    }
    str = str[value];
  });

  return str;
}
