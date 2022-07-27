import styled from 'styled-components/native';
import {
  Button as ButtonDefault,
  RadioButtonPerson,
  ScreenWrapper,
  TextInput,
  Typography,
} from '~/components';
import { getTheme } from '~/utils';

const mediumSpacing = getTheme('mediumSpacing');

export const Wrapper = styled(ScreenWrapper)`
  justify-content: center;
  flex: 1;
`;

export const FormWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardDismissMode: 'interactive',
})``;

export const Input = styled(TextInput)`
  margin-bottom: ${getTheme('minimumSpacing')};
`;

export const PersonTypeText = styled(Typography).attrs({ variant: 'callout' })`
  margin-top: ${getTheme('smallSpacing')};
  margin-bottom: ${mediumSpacing};
`;

export const RadioButton = styled(RadioButtonPerson)`
  padding-bottom: ${mediumSpacing};
`;

export const Button = styled(ButtonDefault)`
  width: 100%;
  align-self: center;
`;
