import { FlatList, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { getTheme } from '~/utils';
import Button from '../Button';
import Typography from '../Typography';

const smallSpacing = getTheme('smallSpacing');
const smallerSpacing = getTheme('smallerSpacing');

export const Wrapper = styled.View`
  width: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
type ColumnProps = {
  flex?: number;
};

export const ListCompnyProduct = styled(FlatList as new () => FlatList).attrs({
  contentContainerStyle: { padding: 0 },
})`
  margin-top: -10px;
  width: 180px;
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.View<ColumnProps>`
  flex: ${({ flex }) => flex || 1};
`;
export const Text = styled.Text`
  padding-right: 10px;
  font-size: 10px;
  padding-top: 10px;
`;
export const ViewMore = styled.Text`
  font-size: 10px;
  color: #3f7ecb;
`;

export const Row = styled.View``;
