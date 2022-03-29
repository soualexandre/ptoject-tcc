import React, { FC } from 'react';
import { DateData } from '~/modules';

import { Calendary } from './styles';

type Props = {
  onDayPress(date: DateData): void;
  markedDates: any;
};

const Calendar: FC<Props> = ({ onDayPress, markedDates, ...rest }) => (
  <Calendary
    onDayPress={onDayPress}
    markedDates={markedDates}
    markingType="period"
    {...rest}
  />
);

export default Calendar;
