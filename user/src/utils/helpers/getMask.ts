import { LOCALE_TYPE } from '../enums';
import { LOCALE } from './constants';

export const getZipCodeMask = () => {
  if (LOCALE === LOCALE_TYPE.PT_AO || LOCALE === LOCALE_TYPE.EN) {
    return undefined;
  }
  return { mask: '99999-999' };
};

export const getDocumentMask = () => {
  if (LOCALE === LOCALE_TYPE.PT_AO || LOCALE === LOCALE_TYPE.EN) {
    return undefined;
  }
  return 'cpf';
};

export const getPhoneMask = () => {
  if (LOCALE === LOCALE_TYPE.PT_AO || LOCALE === LOCALE_TYPE.EN) {
    return { mask: '999 99 99 99' };
  }
  return { mask: '(99)99999-9999' };
};
