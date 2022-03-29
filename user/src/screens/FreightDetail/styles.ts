import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Button, ScreenWrapper, Typography } from '~/components';
import { getTheme } from '~/utils';

const primaryMain = getTheme('primary.main');
const screenSpacing = getTheme('screenSpacing');

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: primaryMain(props),
}))``;

export const Separator = styled.View`
  height: 25px;
`;
export const FreightListBase = styled(
  FlatList as new () => FlatList<ChooseDrivers>,
).attrs({ contentContainerStyle: {} })``;

export const Container = styled.View`
  padding-horizontal: ${screenSpacing};
`;
export const Title = styled(Typography).attrs({ variant: 'headline' })`
  color: ${getTheme('texts.main')};
  font-weight: normal;
  margin-top: ${getTheme('largeSpacing')};
  margin-bottom: ${getTheme('minimumSpacing')};
`;

export const FreightTracking = styled(Button)`
  margin-top: ${screenSpacing};
  margin-bottom: ${screenSpacing};
`;
