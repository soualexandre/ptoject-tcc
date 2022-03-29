import React, { useCallback, useState } from 'react';
import {
  HoshiProps,
  Icon,
  TextInputMask,
  TextInputMaskTypeProp,
} from '~/modules';
import { Error, TextHoshi, TouchableInput, Wrapper } from './styles';

type Props = HoshiProps & {
  error?: string;
  type?: TextInputMaskTypeProp;
};

const PasswordInput: React.FC<Props> = ({
  error,
  type = 'custom',
  ...props
}) => {
  const [passwordSecure, setPasswordSecure] = useState(true);
  const getIconName = (state: boolean) => (state ? 'eye-off' : 'eye');

  const toggle = useCallback(() => {
    setPasswordSecure((oldstate) => !oldstate);
  }, [passwordSecure]);

  return (
    <Wrapper>
      <TextInputMask
        customTextInput={TextHoshi}
        autoCapitalize="none"
        {...props}
        type={type}
        options={{ mask: '********************************' }}
        secureTextEntry={passwordSecure}
      />
      <Error>{error}</Error>
      <TouchableInput onPress={toggle}>
        <Icon name={getIconName(passwordSecure)} size={28} color="grey" />
      </TouchableInput>
    </Wrapper>
  );
};
export default PasswordInput;
