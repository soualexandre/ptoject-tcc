import styled from 'styled-components/native';
import {
  Button,
  ScreenWrapper,
  TextInput,
  Touchable,
  Typography,
} from '~/components';
import { getTheme } from '~/utils';

export const Wrapper = styled(ScreenWrapper)`
  justify-content: center;
  flex: 1;
`;

export const Heading = styled(Typography).attrs({ variant: 'largeTitle' })`
  font-weight: bold;
  text-align: center;
  color: ${getTheme('primary.main')};
  padding: ${getTheme('smallerSpacing')};
`;

export const WrapperContainer = styled.View`
  margin-bottom: ${getTheme('giantSpacing')};
`;

export const WrapperContainerBottom = styled.View`
  margin-top: ${getTheme('mediumSpacing')};
`;
export const ButtonLogin = styled(Button)`
  width: 100%;
`;
export const RegisterWrapper = styled.View`
  margin-top: ${getTheme('mediumSpacing')};
  flex-direction: row;
  justify-content: center;
`;
export const NotRegister = styled(Typography)`
  font-weight: bold;
`;
export const TouchEventRegisterNow = styled(Touchable)`
  margin-left: ${getTheme('minimumSpacing')};
`;

export const RegisterNowText = styled(Typography)``;

export const Input = styled(TextInput)`
  margin-bottom: ${getTheme('smallSpacing')};
`;

export const TouchForgotPassword = styled(Touchable)`
  margin-bottom: ${getTheme('sectionLargeSpacing')};
  align-self: flex-end;
`;
export const TextForgotPassword = styled(Typography).attrs({
  variant: 'callout',
})`
  font-family: Roboto Light;
`;

export const PasswordWrapper = styled.View``;
