import styled from 'styled-components/native';
import {
  Button as ButtonDefault,
  ScreenWrapper,
  TextInput,
  Typography,
} from '~/components';
import { getTheme } from '~/utils';

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.main')(props),
}))`
  flex: 1;
`;

export const Input = styled(TextInput)`
  width: 100%;
  margin-bottom: ${getTheme('minimumSpacing')};
`;

export const Heading = styled(Typography)`
  font-weight: normal;
  text-align: center;
  color: ${getTheme('primary.dark')};
`;

export const Button = styled(ButtonDefault)``;

export const FormWrapper = styled.View`
  flex: 1;
  padding-horizontal: ${getTheme('smallSpacing')};
  justify-content: space-between;
`;
