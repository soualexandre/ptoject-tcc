import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { RowTable, ScreenWrapper, Touchable, Typography } from '~/components';
import { getTheme } from '~/utils';

const primaryMain = getTheme('primary.main');

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${getTheme('secondary.contrast')};
`;

export const TableTitle = styled(Typography)`
  font-weight: bold;
  padding-vertical: ${getTheme('mediumSpacing')};
  text-align: center;
  flex: 1;
`;

export const BodyTableList = styled(
  FlatList as new () => FlatList<Invoice>,
).attrs({})``;

export const Row = styled(RowTable)``;

export const TouchableRow = styled(Touchable)``;

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: primaryMain(props),
}))``;
