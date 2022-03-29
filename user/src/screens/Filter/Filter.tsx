import React, { FC, useCallback } from 'react';
import { If } from '~/components';
import { strings } from '~/locale';
import { DateData } from '~/modules';
import { FILTER_TYPE, useCurrencyFormat } from '~/utils';
import { Label, Notch, Rail, RailSelected, Thumb } from './components/Slider';

import {
  Button,
  ButtonText,
  Calendar,
  Input,
  Row,
  SelectStatus,
  SliderRange,
  Text,
  TextRange,
  Title,
  Wrapper,
  WrapperInput,
} from './styles';

type Props = {
  typeFilter: string;
  markedDates: any;
  onDayPress(date: DateData): void;
  endSelectedDate: string;
  startSelectedDate: string;
  onGoBack(): void;
  onChangeItem(value: string): void;
  startValue: string;
  finishValue: string;
  handleFilter(): void;
  setAddress(value: string): void;
  setStartValue(value: string): void;
  setFinishValue(value: string): void;
  dataFields: string[];
};

const Filter: FC<Props> = ({
  markedDates,
  endSelectedDate,
  startSelectedDate,
  typeFilter,
  onDayPress,
  onGoBack,
  startValue,
  finishValue,
  onChangeItem,
  handleFilter,
  setAddress,
  setStartValue,
  setFinishValue,
  dataFields,
}) => {
  const { currencyFormat } = useCurrencyFormat();
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(
    (value) => <Label text={value} {...{ currencyFormat }} />,
    [],
  );
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setStartValue(low);
    setFinishValue(high);
  }, []);
  return (
    <Wrapper
      fullWidth
      fullHeight
      isCloseButton
      onBackButtonPress={onGoBack}
      isOnBoardingHeader
      showFilter
      title={strings('invoices.filter.title')}
    >
      <WrapperInput>
        <SelectStatus
          title={strings('history.statusRide')}
          items={dataFields}
          onChangeItem={onChangeItem}
        />
      </WrapperInput>

      <If condition={typeFilter === FILTER_TYPE.HISTORY}>
        <WrapperInput>
          <Text>{strings('history.addressProvider')}</Text>
          <Input onChangeText={setAddress} />
        </WrapperInput>
      </If>
      <If condition={typeFilter === FILTER_TYPE.HISTORY}>
        <WrapperInput>
          <Row>
            <Title>{strings('invoices.filter.valueRide')}</Title>
            <TextRange>
              {`${currencyFormat(startValue)}   ${currencyFormat(finishValue)}`}
            </TextRange>
          </Row>
          <SliderRange
            min={0}
            max={5000000}
            step={1}
            floatingLabel
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderLabel={renderLabel}
            renderNotch={renderNotch}
            onValueChanged={handleValueChange}
          />
        </WrapperInput>
      </If>
      <WrapperInput>
        <Text>{strings('invoices.filter.inputLabelStartPeriod')}</Text>
        <Input value={startSelectedDate} editable={false} />
      </WrapperInput>
      <Calendar onDayPress={onDayPress} markedDates={markedDates} />
      <WrapperInput>
        <Text>{strings('invoices.filter.inputLabelEndPeriod')}</Text>
        <Input value={endSelectedDate} editable={false} />
      </WrapperInput>
      <Button onPress={handleFilter}>
        <ButtonText>{strings('invoices.filter.buttonLabel')}</ButtonText>
      </Button>
    </Wrapper>
  );
};

export default Filter;
