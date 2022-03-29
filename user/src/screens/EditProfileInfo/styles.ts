import styled from 'styled-components/native';
import { Button, ScreenWrapper, TextInput, Typography } from '~/components';
import { getTheme } from '~/utils';

const primaryColor = getTheme('primary.contrast');
const textColor = getTheme('texts.main');

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: primaryColor(props),
}))`
  flex: 1;
`;

export const Heading = styled(Typography)`
  font-weight: normal;
  text-align: center;
  color: ${textColor};
`;

export const Input = styled(TextInput)``;
export const FormWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardDismissMode: 'interactive',
})`
  width: 90%;
  align-self: center;
  margin-top: ${getTheme('mediumSpacing')};
`;

export const ButtonSave = styled(Button)`
  width: 90%;
  align-self: center;
`;
