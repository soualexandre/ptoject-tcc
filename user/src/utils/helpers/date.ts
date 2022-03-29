import dayjs from 'dayjs';
import { colors } from '~/theme';
import { LOCALE_TYPE } from '../enums';
import { LOCALE } from './constants';

export const getFormatDate = (date: string): string =>
  dayjs(date).format('DD/MM/YYYY');

export const formatDate = (date: Date): string =>
  dayjs(date).format('DD/MM/YYYY');
export const formatTime = (date: Date): string => dayjs(date).format('HH:mm');

export const getDatesBetweenDates = (markedDates: any, endDate: string) => {
  const keysMarked = Object.keys(markedDates);
  let start = dayjs(keysMarked[0]);
  const end = dayjs(endDate);
  while (end.diff(start) > 0) {
    start = start.add(1, 'day');
    markedDates = {
      ...markedDates,
      [start.format('YYYY-MM-DD')]: {
        color: colors.primary.contrast,
        textColor: colors.primary.main,
      },
    };
  }

  markedDates = {
    ...markedDates,
    [endDate]: {
      endingDay: true,
      color: colors.primary.contrast,
      textColor: colors.primary.main,
    },
  };

  return markedDates;
};

export const getDateTranslationType = () => {
  if (LOCALE === LOCALE_TYPE.PT_AO || LOCALE === LOCALE_TYPE.PT_BR) {
    return 'pt';
  }
  return 'en';
};

export const UnFormatDate = (date: string) => {
  const str = date.split('/');
  const formatedDate = `${str[2]}/${str[1]}/${str[0]}`;
  return formatedDate;
};

export const getDaysBetweenDates = (date: Date, dateToCompare: Date) => {
  const date1 = dayjs(date);
  return date1.diff(dateToCompare, 'day');
};

export const isSameDay = (date: Date, dateToCompare: Date) =>
  getDaysBetweenDates(date, dateToCompare) < 1;
