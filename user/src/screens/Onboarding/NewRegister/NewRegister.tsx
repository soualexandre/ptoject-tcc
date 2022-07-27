import React from 'react';
import { isEmpty } from 'lodash';
import { InputMask } from '~/components';
import { strings } from '~/locale';
import { FormikProps, useFormikContext } from '~/modules';
import { useAlerts } from '~/utils';
import { FormNewRegister } from './formValues';
import {
  Button,
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
  isLoading: boolean;
};
const NewRegister: React.FC<Props> = ({
  userType,
  isLoading,
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
          label={strings('newRegister.name')}
          value={values.name}
          error={errors.name}
          keyboardType="numeric"
          onChangeText={handleChange('name')}
        />
        <Input
          keyboardType="email-address"
          label={strings('newRegister.labelEmail')}
          value={values.username}
          error={errors.username}
          onChangeText={handleChange('username')}
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
      </FormWrapper>
      <Button onPress={handleSubmit} isLoading={isLoading}>
        {strings('general.next')}
      </Button>
    </Wrapper>
  );
};

export default NewRegister;
