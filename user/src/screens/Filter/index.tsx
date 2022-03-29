import React, { FC, useEffect, useState } from 'react';
import { strings } from '~/locale';
import { DateData } from '~/modules';
import { NavigationActions, useRoute } from '~/navigation';
import { colors } from '~/theme';
import {
  FILTER_STATUS,
  getDatesBetweenDates,
  getFormatDate,
  getObjectKeyFirst,
  getObjectkeyLast,
  useAlerts,
  useStores,
} from '~/utils';
import { FIELDS_TYPE, FilterModalScreenParams } from '~/utils/types';
import Filter from './Filter';

const FilterContainer: FC = () => {
  const [startSelectedDate, setStartSelectedDate] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState(0);
  const [startValue, setStartValue] = useState('');
  const [finishValue, setFinishValue] = useState('');
  const [endSelectedDate, setEndSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState({});
  const [autoComplete, setAutoComplete] = useState<string[]>([]);
  const { params } = useRoute<FilterModalScreenParams>();
  const { showError, showSuccess } = useAlerts();
  const { freight, request } = useStores();

  const onDayPress = ({ dateString }: DateData) => {
    if (!startSelectedDate) {
      setStartSelectedDate(getFormatDate(dateString));
      const marked = {
        [dateString]: {
          startingDay: true,
          color: colors.primary.contrast,
          textColor: colors.primary.main,
        },
      };
      setMarkedDates(marked);
    } else if (dateString < getObjectKeyFirst(markedDates)) {
      setStartSelectedDate(getFormatDate(dateString));

      const marked = {
        [dateString]: {
          startingDay: true,
          color: colors.primary.contrast,
          textColor: colors.primary.main,
        },
      };
      const dates = getDatesBetweenDates(marked, getObjectkeyLast(markedDates));

      setMarkedDates(dates);
    } else if (
      dateString > getObjectKeyFirst(markedDates) &&
      dateString < getObjectkeyLast(markedDates)
    ) {
      setEndSelectedDate(getFormatDate(dateString));
      const marked = {
        [getObjectKeyFirst(markedDates)]: {
          startingDay: true,
          color: colors.primary.contrast,
          textColor: colors.primary.main,
        },
      };
      const dates = getDatesBetweenDates(marked, dateString);

      setMarkedDates(dates);
    } else if (
      dateString === getObjectKeyFirst(markedDates) ||
      dateString === getObjectkeyLast(markedDates)
    ) {
      const marked = {
        [dateString]: {
          selected: true,
          color: colors.primary.contrast,
          textColor: colors.primary.main,
        },
      };
      setMarkedDates(marked);
      setEndSelectedDate(getFormatDate(dateString));
      setStartSelectedDate(getFormatDate(dateString));
    } else {
      const dates = getDatesBetweenDates(markedDates, dateString);

      setMarkedDates(dates);
      setEndSelectedDate(getFormatDate(dateString));
    }
  };

  const handleFilter = async () => {
    try {
      const params = {
        status_ride: String(status),
        start_date: getObjectKeyFirst(markedDates),
        finish_date: getObjectkeyLast(markedDates),
        address,
        start_value: startValue,
        finish_value: finishValue,
      };
      await freight.getFilterHistory(params);
      showSuccess(strings('history.search'));
    } catch ({ message }) {
      showError(message);
    }
    onGoBack();
  };

  const getFieldsFilter = async () => {
    await request.autoComplete({
      fields: [FIELDS_TYPE.FREIGHT_STATUS],
    });
    const selectStatus = request.dataAutoComplete.freight_status.map(
      (value) => value.status_name,
    );
    setAutoComplete(selectStatus);
    if (String(status) === FILTER_STATUS.ALL) {
      setStatus(status);
    } else {
      setStatus(request.dataAutoComplete.freight_status[0].id);
    }
  };

  const onGoBack = () => {
    NavigationActions.goBack();
  };

  useEffect(() => {
    getFieldsFilter();
  }, []);

  const onChangeItem = (id: string) => {
    const selectStatus = request.dataAutoComplete.freight_status.find(
      (status) => status.status_name === id,
    );
    if (selectStatus) {
      setStatus(selectStatus.id);
    }
  };
  return (
    <Filter
      dataFields={autoComplete}
      setStartValue={setStartValue}
      setFinishValue={setFinishValue}
      startValue={startValue}
      finishValue={finishValue}
      setAddress={setAddress}
      typeFilter={params.type}
      onGoBack={onGoBack}
      onChangeItem={onChangeItem}
      markedDates={markedDates}
      onDayPress={onDayPress}
      endSelectedDate={endSelectedDate}
      startSelectedDate={startSelectedDate}
      handleFilter={handleFilter}
    />
  );
};

export default FilterContainer;
