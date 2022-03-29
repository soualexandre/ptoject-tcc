import * as React from 'react';
import {
  HoshiProps,
  TextInputMask,
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from '~/modules';
import { Error, TextHoshi, Wrapper } from './styles';

type Props = HoshiProps & {
  error?: string;
  type?: TextInputMaskTypeProp;
  options?: TextInputMaskOptionProp;
};
const Input: React.FC<Props> = ({
  error,
  type = 'custom',
  options = {
    mask: '******************************************************************************************',
  },
  ...props
}) => (
  <Wrapper>
    <TextInputMask
      customTextInput={TextHoshi}
      autoCapitalize="none"
      {...props}
      type={type}
      options={options}
    />
    <Error>{error}</Error>
  </Wrapper>
);
export default Input;
