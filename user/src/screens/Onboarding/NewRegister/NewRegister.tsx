import React from 'react';
import { isEmpty } from 'lodash';
import { InputMask } from '~/components';
import { strings } from '~/locale';
import { FormikProps, useFormikContext } from '~/modules';
import { getPhoneMask, useAlerts } from '~/utils';
import { FormNewRegister, radioProps } from './formValues';
import {
  ButtonContinue,
  FormWrapper,
  Input,
  PersonTypeText,
  RadioButton,
  Wrapper,
} from './styles';

type Props = {
  userType: number;
  onChangeRadioButton(index: number): void;
  passwordMask: boolean;
  togglePasswordMask: () => void;
  confirmMask: boolean;
  toggleConfirmMask: () => void;
};

const NewRegister: React.FC<Props> = ({
  userType,
  onChangeRadioButton,
  passwordMask,
  togglePasswordMask,
  confirmMask,
  toggleConfirmMask,
}) => {
  const {
    submitForm,
    values,
    errors,
    handleChange,
    validateForm,
  }: FormikProps<FormNewRegister> = useFormikContext();

  const { showError } = useAlerts();

  const handleSubmit = async () => {
    const fields = await validateForm();

    if (isEmpty(fields)) {
      return submitForm();
    }
    showError(strings('error.unknow'));
  };

  return (
    <Wrapper
      title={strings('newRegister.title')}
      description={strings('newRegister.description')}
      isOnBoardingHeader
      hasScroll={false}
    >
      <FormWrapper>
        <Input
          keyboardType="email-address"
          label={strings('newRegister.labelEmail')}
          value={values.email}
          error={errors.email}
          onChangeText={handleChange('email')}
        />
        <Input
          label={strings('newRegister.labelPhone')}
          value={values.phone}
          options={getPhoneMask()}
          error={errors.phone}
          keyboardType="numeric"
          onChangeText={handleChange('phone')}
        />
        <Input
          label={strings('newRegister.labelPassword')}
          value={values.password}
          error={errors.password}
          secureTextEntry={passwordMask}
          onChangeText={handleChange('password')}
        />
        <InputMask
          toggle={togglePasswordMask}
          state={passwordMask}
          position={2}
        />
        <Input
          label={strings('newRegister.labelConfirmPassword')}
          value={values.confirmPassword}
          error={errors.confirmPassword}
          secureTextEntry={confirmMask}
          onChangeText={handleChange('confirmPassword')}
        />
        <InputMask
          toggle={toggleConfirmMask}
          state={confirmMask}
          position={3}
        />
        <PersonTypeText>{strings('newRegister.personType')}</PersonTypeText>
        <RadioButton
          radioProps={radioProps}
          selectedIndex={userType}
          onButtonPress={onChangeRadioButton}
        />
      </FormWrapper>
      <ButtonContinue onPress={handleSubmit}>
        {strings('general.next')}
      </ButtonContinue>
    </Wrapper>
  );
};

export default NewRegister;
