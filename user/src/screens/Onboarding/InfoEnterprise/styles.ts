import styled from 'styled-components/native';
import { Button, ScreenWrapper, TextInput } from '~/components';

export const Wrapper = styled(ScreenWrapper)`
  justify-content: center;
  flex: 1;
`;

export const Input = styled(TextInput)``;
export const FormWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardDismissMode: 'interactive',
})``;

export const ButtonContinue = styled(Button)`
  width: 100%;
  align-self: center;
`;
