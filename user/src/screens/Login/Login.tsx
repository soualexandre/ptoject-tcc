import React from 'react';
import { Touchable } from '~/components';
import { strings } from '~/locale';
import { FormikProps, Icon, useFormikContext } from '~/modules';
import { Routes } from '~/navigation';
import { APP_NAME } from '~/whitelabel';
import { FormLogin } from './formValues';

import {
  ButtonLogin,
  Heading,
  Input,
  NotRegister,
  PasswordWrapper,
  RegisterNowText,
  RegisterWrapper,
  TextForgotPassword,
  TouchEventRegisterNow,
  TouchForgotPassword,
  Wrapper,
  WrapperContainer,
  WrapperContainerBottom,
} from './styles';

type Props = {
  handleNavigate(route: Routes): void;
  passwordMask: boolean;
  togglePasswordMask: () => void;
  getIconName: () => string;
};

const Login: React.FC<Props> = ({
  handleNavigate,
  passwordMask,
  togglePasswordMask,
  getIconName,
}) => {
  const {
    submitForm,
    values,
    errors,
    handleChange,
    isSubmitting,
  }: FormikProps<FormLogin> = useFormikContext();

  return (
    <Wrapper>
      <WrapperContainer>
        <Heading>{APP_NAME}</Heading>
      </WrapperContainer>

      <Input
        keyboardType="email-address"
        label={strings('login.labelEmail')}
        value={values.email}
        error={errors.email}
        onChangeText={handleChange('email')}
        autoCorrect={false}
      />
      <PasswordWrapper>
        <Input
          secureTextEntry={passwordMask}
          label={strings('login.labelPassword')}
          value={values.password}
          error={errors.password}
          onChangeText={handleChange('password')}
        />
        <Touchable
          onPress={togglePasswordMask}
          style={{
            position: 'absolute',
            top: 20,
            right: 0,
            width: 28,
          }}
        >
          <Icon name={getIconName()} size={28} color="grey" />
        </Touchable>
      </PasswordWrapper>

      <TouchForgotPassword
        testID="SignIn.RecoverPassword"
        onPress={() => handleNavigate(Routes.RECOVER_PASSWORD)}
      >
        <TextForgotPassword>
          {strings('login.forgotPassword')}
        </TextForgotPassword>
      </TouchForgotPassword>
      <WrapperContainerBottom>
        <ButtonLogin onPress={submitForm} isLoading={isSubmitting}>
          {strings('login.loginNow')}
        </ButtonLogin>
        <RegisterWrapper>
          <NotRegister>{strings('login.notRegister')}</NotRegister>
          <TouchEventRegisterNow
            onPress={() => handleNavigate(Routes.ONBOARDING_NEW_REGISTER)}
          >
            <RegisterNowText>{strings('login.register')}</RegisterNowText>
          </TouchEventRegisterNow>
        </RegisterWrapper>
      </WrapperContainerBottom>
    </Wrapper>
  );
};

export default Login;
