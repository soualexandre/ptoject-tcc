import styled from 'styled-components/native';
import {
  Button,
  CheckBox,
  ScreenWrapper,
  TextInput,
  Typography,
} from '~/components';
import { getTheme } from '~/utils';

export const Heading = styled(Typography)`
  margin-vertical: ${getTheme('moderateSpacing')};
`;

export const Input = styled(TextInput)``;

export const Container = styled.View`
  margin-horizontal: ${getTheme('screenSpacing')};
  margin-top: ${getTheme('largeSpacing')};
  flex: 1;
  justify-content: space-between;
`;

export const InfoPayment = styled.View`
  margin-top: ${getTheme('largeSpacing')};
`;

export const ContainerPayment = styled.View``;

export const TitlePayment = styled(Typography)`
  font-weight: bold;
`;

export const TypePayment = styled.View``;

export const Check = styled(CheckBox)`
  margin-bottom: ${getTheme('minimumSpacing')};
`;

export const Next = styled(Button)`
  margin-top: ${getTheme('sectionLargeSpacing')};
`;

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.main')(props),
}))`
  flex: 1;
`;
