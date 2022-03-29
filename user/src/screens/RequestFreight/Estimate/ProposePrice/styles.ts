import styled from 'styled-components/native';
import {
  Button,
  CheckBox,
  ScreenWrapper,
  TextInput,
  Typography,
} from '~/components';
import { getTheme } from '~/utils';

const largeSpacing = getTheme('largeSpacing');

export const Container = styled.View`
  margin-horizontal: ${getTheme('screenSpacing')};
  flex: 1;
  justify-content: space-between;
`;

export const Input = styled(TextInput)``;

export const TextValueEstimated = styled(Typography).attrs({
  variant: 'headline',
})`
  font-weight: bold;
  margin-top: ${getTheme('largeSpacing')};
  margin-bottom: ${getTheme('smallerSpacing')};
`;

export const SubText = styled(Typography).attrs({ variant: 'callout' })`
  font-family: Roboto Light;
  margin-bottom: ${getTheme('mediumSpacing')};
`;

export const Check = styled(CheckBox)`
  margin-bottom: ${largeSpacing};
`;

export const Next = styled(Button)`
  margin-top: ${getTheme('sectionLargeSpacing')};
`;

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.main'),
}))`
  flex: 1;
`;

export const Info = styled.View`
  flex-direction: row;
  padding-vertical: ${largeSpacing};
  justify-content: space-around;
  border-bottom-width: 1px;
  border-bottom-color: ${getTheme('borderOpacity')};
`;
export const InfoEstimated = styled.View`
  align-items: center;
`;
export const TitleEstimated = styled(Typography).attrs({
  variant: 'subhead',
})`
  font-family: Roboto Light;
  margin-bottom: 7px;
  opacity: 0.3;
`;
export const ValueEstimated = styled(Typography).attrs({ variant: 'title4' })`
  font-weight: bold;
`;
