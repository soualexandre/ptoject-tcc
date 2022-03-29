import { Dimensions, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import {
  Button,
  CheckBox,
  DropDown,
  ScreenWrapper,
  TextInput,
  Typography,
} from '~/components';

import { getTheme } from '~/utils';

const moderationLargeSpacing = getTheme('moderationLargeSpacing');
const smallerSpacing = getTheme('smallerSpacing');
const minimumSpacing = getTheme('minimumSpacing');
const screenSpacing = getTheme('screenSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const largeSpacing = getTheme('largeSpacing');
const primaryMain = getTheme('primary.main');

const { width: screenWidth } = Dimensions.get('window');

export const Container = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  keyboardDismissMode: 'interactive',
})`
  margin-horizontal: ${screenSpacing};
  flex: 1;
`;

export const TextValueEstimated = styled(Typography).attrs({
  variant: 'headline',
})`
  font-weight: bold;
  margin-top: ${largeSpacing};
  margin-bottom: ${smallerSpacing};
`;

export const SubText = styled(Typography).attrs({ variant: 'callout' })`
  font-family: Roboto Light;
  margin-bottom: ${mediumSpacing};
`;

export const Text = styled(Typography).attrs({ variant: 'callout' })`
  color: ${getTheme('gray')};
  font-weight: 400;
  margin-bottom: ${moderationLargeSpacing};
`;

export const Next = styled(Button)`
  margin-top: 50px;
`;

export const Drop = styled(DropDown)`
  margin-bottom: ${moderationLargeSpacing};
`;

export const Check = styled(CheckBox)`
  margin-bottom: ${minimumSpacing};
`;
export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: primaryMain(props),
}))`
  flex: 1;
`;

export const InputValue = styled(TextInput)`
  width: ${screenWidth / 4}px;
  margin-right: ${mediumSpacing};
`;

export const InputAmount = styled(TextInput)`
  width: ${screenWidth / 3}px;
`;
export const InputWrapper = styled.View`
  flex-direction: row;
`;

export const SelectBoxRow = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;
