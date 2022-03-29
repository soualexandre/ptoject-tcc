import styled from 'styled-components/native';
import { Button, ScreenWrapper, TextInput } from '~/components';
import { getTheme } from '~/utils';

export const Wrapper = styled(ScreenWrapper)`
  flex: 1;
`;

export const Input = styled(TextInput)``;

export const Send = styled(Button)`
  width: 100%;
  align-self: center;
`;

export const FormWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardDismissMode: 'interactive',
})`
  width: 100%;
  align-self: center;
  margin-top: ${getTheme('mediumSpacing')};
`;
