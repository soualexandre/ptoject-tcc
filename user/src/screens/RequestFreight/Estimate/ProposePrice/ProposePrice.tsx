import React from 'react';
import { FormikProps, useFormikContext } from 'formik';
import { View } from 'react-native';
import { If, RoundedCheckBox } from '~/components';
import { strings } from '~/locale';
import { FormProposePrice } from './formValues';
import {
  Container,
  Info,
  InfoEstimated,
  Input,
  Next,
  SubText,
  TextValueEstimated,
  TitleEstimated,
  ValueEstimated,
  Wrapper,
} from './styles';

type Props = {
  toggleCheckBoxPropose: boolean;
  setToggleCheckBoxPropose(value: boolean): void;
  handleNavigation(): void;
  dataEstimate: {
    estimated_duration: string;
    estimated_distance: string;
    estimated_price: string;
  };
};

const ProposePrice: React.FC<Props> = ({
  handleNavigation,
  toggleCheckBoxPropose,
  setToggleCheckBoxPropose,
  dataEstimate,
}) => {
  const {
    submitForm,
    values,
    errors,
    handleChange,
  }: FormikProps<FormProposePrice> = useFormikContext();

  return (
    <Wrapper
      onBackButtonPress={handleNavigation}
      title={strings('proposePrice.title')}
      fullWidth
      isMainSimpleHeader
    >
      <Container>
        <View>
          <Info>
            <InfoEstimated>
              <TitleEstimated>{strings('vehicle.duration')}</TitleEstimated>
              <ValueEstimated>{dataEstimate.estimated_duration}</ValueEstimated>
            </InfoEstimated>
            <InfoEstimated>
              <TitleEstimated>{strings('vehicle.distance')}</TitleEstimated>
              <ValueEstimated>{dataEstimate.estimated_distance}</ValueEstimated>
            </InfoEstimated>
            <InfoEstimated>
              <TitleEstimated>
                {strings('vehicle.estimatedValue')}
              </TitleEstimated>
              <ValueEstimated>{dataEstimate.estimated_price}</ValueEstimated>
            </InfoEstimated>
          </Info>
          <TextValueEstimated>
            {strings('proposePrice.estimated')}
          </TextValueEstimated>
          <SubText>{strings('proposePrice.subTitle')}</SubText>
          <RoundedCheckBox
            title={strings('proposePrice.propose')}
            value={toggleCheckBoxPropose}
            onValueChange={(newValue) => setToggleCheckBoxPropose(newValue)}
          />

          <If condition={toggleCheckBoxPropose}>
            <Input
              onChangeText={handleChange('desired_price')}
              value={values.desired_price.toString()}
              error={errors.desired_price}
              keyboardType="numeric"
              label={strings('proposePrice.proposedPrice')}
            />
          </If>
        </View>
        <Next onPress={submitForm}>{strings('proposePrice.next')}</Next>
      </Container>
    </Wrapper>
  );
};

export default ProposePrice;
