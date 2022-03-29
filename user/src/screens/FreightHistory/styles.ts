import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import {
  Button,
  LoadingIndicator,
  ScreenWrapper,
  Typography,
} from '~/components';
import { TabBar } from '~/modules';
import { getTheme } from '~/utils';

const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const textsLight = getTheme('texts.light');
const smallSpacing = getTheme('smallSpacing');

export const FreightListBase = styled(
  FlatList as new () => FlatList<Freight>,
).attrs({ contentContainerStyle: { padding: 20 } })``;

export const TabBarView = styled(TabBar).attrs((props) => ({
  labelStyle: {
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: 'bold',
  },
  indicatorContainerStyle: {
    backgroundColor: primaryContrast(props),
    height: '100%',
  },
  indicatorStyle: {
    backgroundColor: primaryMain(props),
    height: 2,
  },
  activeColor: primaryMain(props),
  inactiveColor: textsLight(props),
  style: {
    elevation: 0,
  },
}))``;

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: primaryMain(props),
}))`
  justify-content: center;
  flex: 1;
`;

export const Separator = styled.View`
  height: 25px;
`;

export const NoDataWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${smallSpacing};
  padding-top: ${smallSpacing};
`;

export const NoDataTitle = styled(Typography).attrs({
  variant: 'title2',
})`
  font-family: Roboto;
  font-weight: bold;
  margin-top: ${getTheme('moderateSpacing')};
  text-align: center;
  color: ${getTheme('primary.main')};
`;

export const NoDataText = styled(Typography).attrs({
  variant: 'subhead',
})`
  margin-top: ${smallSpacing};
  text-align: center;
  color: ${getTheme('gray')};
`;

export const NewFreight = styled(Button)`
  width: 100%;
`;

export const Loading = styled(LoadingIndicator).attrs({ color: 'grey' })`
  margin-top: ${getTheme('sectionLargeSpacing')};
`;
