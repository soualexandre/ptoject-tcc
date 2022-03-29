import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import {
  AmmountService,
  Button,
  CardInfoFreight,
  FreightStatus,
  LoadingIndicator,
  ScreenWrapper,
  TypeService,
  Typography,
  ValuesServices,
} from '~/components';
import { getTheme } from '~/utils';

const marginTop = getTheme('sectionLargeSpacing');
const heightChart = 350;

export const DashBoard = styled.View`
  z-index: 999;
`;
export const FreightListBase = styled(FlatList as new () => FlatList).attrs({
  contentContainerStyle: { padding: 0 },
})`
  width: 100%;
`;

export const ListBaseFilterProduct = styled(
  FlatList as new () => FlatList,
).attrs({
  contentContainerStyle: { padding: 0 },
})`
  margin-top: -10px;
`;
export const Separator = styled.View``;
export const InfoProvider = styled(CardInfoFreight)`
  margin-bottom: ${getTheme('smallSpacing')};
  margin-horizontal: ${getTheme('smallSpacing')};
`;

export const Freight = styled(FreightStatus)`
  height: 450px;
  margin-top: ${marginTop};
`;

export const Services = styled(TypeService)`
  height: ${heightChart}px;
  margin-top: ${marginTop};
`;

export const Amount = styled(AmmountService)`
  height: ${heightChart}px;
  margin-top: ${marginTop};
`;

export const Values = styled(ValuesServices)`
  height: ${heightChart}px;
  margin-top: ${marginTop};
`;
export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.contrast')(props),
}))`
  flex: 1;
`;

export const Loading = styled(LoadingIndicator).attrs({ color: 'grey' })`
  margin-top: ${getTheme('sectionLargeSpacing')};
`;

export const NoDataWrapper = styled.View`
  flex: 1;
  margin-horizontal: ${getTheme('screenSpacing')};
  padding-top: ${getTheme('smallSpacing')};
  align-items: center;
  justify-content: space-between;
`;

export const Center = styled.View`
  margin: auto;
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
  margin-top: ${getTheme('smallSpacing')};
  text-align: center;
  color: ${getTheme('gray')};
`;

export const NewFreight = styled(Button)`
  width: 100%;
`;
