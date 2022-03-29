import styled from 'styled-components/native';
import { strings } from '~/locale';
import { CalendarDefault, LocaleConfig } from '~/modules';
import { getTheme } from '~/utils';

LocaleConfig.locales.pt_BR = {
  monthNames: strings('freightEnd.calendar.monthNames'),
  monthNamesShort: strings('freightEnd.calendar.monthNamesShort'),
  dayNames: strings('freightEnd.calendar.dayNames'),
  dayNamesShort: strings('freightEnd.calendar.dayNamesShort'),
};

LocaleConfig.defaultLocale = 'pt_BR';
export const Calendary = styled(CalendarDefault).attrs((props) => ({
  theme: {
    textMonthFontWeight: 'bold',
    monthTextColor: getTheme('primary.contrast')(props),
    textSectionTitleColor: getTheme('primary.contrast')(props),
    calendarBackground: getTheme('secondary.main')(props),
    selectedDayBackgroundColor: getTheme('primary.contrast')(props),
    selectedDayTextColor: getTheme('primary.light')(props),
    todayTextColor: getTheme('primary.contrast')(props),
    dayTextColor: getTheme('primary.contrast')(props),
    selectedDotColor: getTheme('primary.contrast')(props),
    arrowColor: getTheme('primary.contrast')(props),
  },
}))``;
