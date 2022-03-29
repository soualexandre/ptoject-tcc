import React, { useState } from 'react';
import { strings } from '~/locale';
import { DatePicker } from '~/modules';
import {
  DATE_PICKER,
  formatDate,
  formatTime,
  getDateTranslationType,
} from '~/utils';
import If from '../If';
import { Input, Wrapper } from './styles';

export type ModeDatePicker =
  | DATE_PICKER.DATE
  | DATE_PICKER.TIME
  | DATE_PICKER.DATE_TIME;

type Props = {
  error?: string;
  mode?: ModeDatePicker;
  label: string;
  minDate?: Date;
  value?: string;
  onChangeText(value: string): void;
  passedData?: (value: Date) => void;
};

const DatePickerComponent: React.FC<Props> = ({
  error,
  label,
  mode = DATE_PICKER.DATE,
  minDate,
  value = '',
  onChangeText,
  passedData,
}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [valueDate, setValueDate] = useState<string>(value);

  const onConfirm = (value: Date) => {
    setOpen(false);
    if (mode === DATE_PICKER.DATE) {
      setValueDate(formatDate(value));
      onChangeText(formatDate(value));
    } else if (mode === DATE_PICKER.TIME) {
      setValueDate(formatTime(value));
      onChangeText(formatTime(value));
    } else {
      setValueDate(value.toDateString());
      onChangeText(value.toDateString());
    }
    if (passedData) {
      passedData(value);
    }
    setDate(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const title =
    mode === DATE_PICKER.DATE
      ? strings('datePicker.titleDate')
      : strings('datePicker.titleTime');

  return (
    <Wrapper>
      <Input
        error={error}
        onChangeText={onChangeText}
        value={valueDate}
        label={label}
        onPressIn={handleOpen}
        onFocus={handleOpen}
      />
      <If condition={open}>
        <DatePicker
          title={title}
          cancelText={strings('general.cancel')}
          confirmText={strings('general.confim')}
          modal
          open={open}
          mode={mode}
          date={date}
          onConfirm={onConfirm}
          onCancel={handleClose}
          locale={getDateTranslationType()}
          minimumDate={minDate}
        />
      </If>
    </Wrapper>
  );
};
export default DatePickerComponent;
