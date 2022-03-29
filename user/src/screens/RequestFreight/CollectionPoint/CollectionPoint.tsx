import React from 'react';
import { FormikProps, useFormikContext } from 'formik';
import { View } from 'react-native';
import { DatePicker, If } from '~/components';
import { strings } from '~/locale';
import {
  DATE_PICKER,
  getBooleanFromString,
  getLabelCollectMan,
  getLabelCollectPhoneMan,
  getLabelDate,
  getLabelTime,
  getPhoneMask,
} from '~/utils';
import { FormCollectionPoint, typeAddressItems } from './form';
import {
  Container,
  Input,
  Next,
  TouchableInput,
  TypeAddress,
  Wrapper,
} from './styles';

type ScreenTexts = {
  title: string;
  typeAddress: string;
};

type Props = {
  onPresssAutoComplete(): void;
  showType: string;
  getMinimumDate: () => Date;
  getMinimumTime: (value: Date) => void;
  minimumTime: Date | undefined;
  getCurrentTime: (value: Date) => void;
  getTexts(): ScreenTexts;
};

const CollectionPoint: React.FC<Props> = ({
  onPresssAutoComplete,
  showType,
  getMinimumDate,
  getMinimumTime,
  minimumTime,
  getCurrentTime,
  getTexts,
}) => {
  const {
    submitForm,
    values,
    errors,
    handleChange,
  }: FormikProps<FormCollectionPoint> = useFormikContext();
  return (
    <Wrapper
      isCloseButton
      title={getTexts().title}
      fullWidth
      isMainSimpleHeader
      bounces={false}
    >
      <Container>
        <View>
          <If condition={getBooleanFromString(showType)}>
            <TypeAddress
              title={strings('freightConclude.typeAddress')}
              items={typeAddressItems}
              defaultValue={getTexts().typeAddress}
              onChangeItem={handleChange('type_address')}
            />
          </If>
          <TouchableInput onPress={onPresssAutoComplete}>
            <Input
              multiline
              error={errors.collect_address}
              value={values.collect_address}
              editable={false}
              onPressIn={onPresssAutoComplete}
              onChangeText={handleChange('collect_address')}
              label={strings('collectionPoint.inputAddress')}
            />
          </TouchableInput>
          <Input
            error={errors.collect_number}
            onChangeText={handleChange('collect_number')}
            value={values.collect_number}
            label={strings('collectionPoint.inputNumber')}
            type="only-numbers"
          />
          <Input
            value={values.collect_reference}
            error={errors.collect_reference}
            onChangeText={handleChange('collect_reference')}
            label={strings('collectionPoint.inputPointRef')}
            autoCapitalize="sentences"
          />
          <DatePicker
            error={errors.collect_date}
            onChangeText={handleChange('collect_date')}
            value={values.collect_date}
            label={getLabelDate(values)}
            minDate={getMinimumDate()}
            passedData={getMinimumTime}
          />
          <DatePicker
            error={errors.collect_time}
            onChangeText={handleChange('collect_time')}
            value={values.collect_time}
            label={getLabelTime(values)}
            mode={DATE_PICKER.TIME}
            minDate={minimumTime}
            passedData={getCurrentTime}
          />
          <Input
            error={errors.collect_name}
            onChangeText={handleChange('collect_name')}
            value={values.collect_name}
            label={getLabelCollectMan(values)}
            autoCapitalize="sentences"
          />
          <Input
            error={errors.collect_phone}
            onChangeText={handleChange('collect_phone')}
            value={values.collect_phone}
            options={getPhoneMask()}
            keyboardType="numeric"
            label={getLabelCollectPhoneMan(values)}
          />
        </View>
        {/* <If condition={getBooleanFromString(showImages)}>
          <UploadImageLocal
            title={strings('collectionPoint.imageLocal')}
            handleImage={handleImage}
          />
        </If> */}
        <Next onPress={submitForm}>{strings('collectionPoint.addPoint')}</Next>
      </Container>
    </Wrapper>
  );
};

export default CollectionPoint;
