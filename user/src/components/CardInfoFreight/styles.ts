import { Image } from 'react-native';
import styled from 'styled-components/native';
import { getTheme } from '~/utils';
import Typography from '../Typography';

export const Wrapper = styled.View`
  background-color: ${getTheme('primary.contrast')};
  border-bottom-left-radius: 30px;

  border-radius: ${getTheme('smallRadius')};
  padding-horizontal: ${getTheme('screenSpacing')};
  shadow-color: ${getTheme('secondary.shadow')};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: ${getTheme('smallRadius')};
  elevation: 3;
  height: 210px;
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ImageCompany = styled.Image.attrs({})`
  height: 210px;
  width: 130px;
  border-top-right-radius: 30px;
`;

type ColumnProps = {
  flex?: number;
};

export const Column = styled.View<ColumnProps>`
  flex: ${({ flex }) => flex || 1};
`;
export const Value = styled(Typography).attrs({ variant: 'caption1' })`
  font-family: Roboto Light;
  opacity: 0.54;
`;

export const Title = styled(Typography).attrs({ variant: 'callout' })`
  font-weight: bold;
  padding-top: ${getTheme('smallSpacing')};
`;
export const Product = styled(FlatList as new () => FlatList).attrs({
  contentContainerStyle: { padding: 0 },
})`
  font-weight: bold;
  padding-top: 5px;
`;
export const Link = styled(Typography).attrs({ variant: 'subhead' })`
  padding-top: 5px;
`;
export const ProductList = styled(Typography).attrs({ variant: 'subhead' })`
  padding-top: 5px;
`;
export const Star = styled(Typography).attrs({ variant: 'subhead' })`
  padding-top: 5px;
`;
