import React, { FC } from 'react';
import { strings } from '~/locale';
import { FormikProps, useFormikContext } from '~/modules';
import { FormRecoverPassword } from './formValues';
import { FormWrapper, Input, Send, Wrapper } from './styles';

type Props = {
  onGoBack(): void;
};

const RecoverPassword: FC<Props> = ({ onGoBack }) => {
  const {
    submitForm,
    values,
    errors,
    handleChange,
    isSubmitting,
  }: FormikProps<FormRecoverPassword> = useFormikContext();

  return (
    <Wrapper
      hasScroll={false}
      isOnBoardingHeader
      title={strings('recoverPassword.title')}
      description={strings('recoverPassword.description')}
      keyboarVerticalOffset={10}
      onBackButtonPress={onGoBack}
    >
      <FormWrapper>
        <Input
          keyboardType="email-address"
          label={strings('recoverPassword.labelEmail')}
          value={values.email}
          error={errors.email}
          onChangeText={handleChange('email')}
        />
      </FormWrapper>
      <Send onPress={submitForm} isLoading={isSubmitting}>
        {strings('general.send')}
      </Send>
    </Wrapper>
  );
};

export default RecoverPassword;
