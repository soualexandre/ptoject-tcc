import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import {
  Button as ButtonDefault,
  ScreenWrapper,
  TextInput,
  Typography,
} from '~/components';
import { getTheme } from '~/utils';

const inputStateWidth = Dimensions.get('screen').width * 0.3;
const inputCountryWidth = Dimensions.get('screen').width * 0.55;

const primaryColor = getTheme('primary.contrast');
const textColor = getTheme('texts.main');

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: primaryColor(props),
}))`
  flex: 1;
`;

export const FormWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardDismissMode: 'interactive',
})`
  width: 90%;
  align-self: center;
  margin-top: ${getTheme('mediumSpacing')};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled(TextInput)`
  margin-bottom: ${getTheme('minimumSpacing')};
`;

export const InputState = styled(Input)`
  width: ${inputStateWidth}px;
`;

export const InputCountry = styled(Input)`
  width: ${inputCountryWidth}px;
`;

export const Button = styled(ButtonDefault)`
  width: 90%;
  align-self: center;
`;

export const Heading = styled(Typography)`
  font-weight: normal;
  text-align: center;
  color: ${textColor};
`;
