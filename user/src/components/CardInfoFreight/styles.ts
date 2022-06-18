import { FlatList, Image } from 'react-native';
import { Rating } from 'react-native-ratings';
import styled from 'styled-components/native';
import { IconStar } from '~/assets';
import { getTheme } from '~/utils';
import Typography from '../Typography';

export const Wrapper = styled.View`
  padding-horizontal: ${getTheme('screenSpacing')};
  height: 80px;
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ImageCompany = styled.Image.attrs({})`
  height: 60px;
  width: 60px;
  border-radius: 999px;
  margin-top: 15px;
`;

type ColumnProps = {
  flex?: number;
};

export const StarIcon = styled(IconStar)``;
export const RatingStar = styled(Rating)`
  display: flex;
`;
export const Column = styled.View<ColumnProps>`
  flex: ${({ flex }) => flex || 1};
`;
export const ColumnImage = styled.View<ColumnProps>`
  flex: ${({ flex }) => flex || 1};
  justify-content: center;
  margin-top: 15px;
  margin-right: 20px;
  margin-left: -10px;
`;
export const ColumnStar = styled.View<ColumnProps>`
  flex: ${({ flex }) => flex || 1};
  margin-right: -22px;
`;
export const ColumnIconStar = styled.View<ColumnProps>`
  flex: ${({ flex }) => flex || 1};
  margin-top: 13px;
`;
export const Value = styled(Typography).attrs({ variant: 'caption1' })`
  font-family: Roboto Light;
  opacity: 0.54;
`;
export const Separator = styled.View``;
export const Title = styled(Typography).attrs({ variant: 'subhead' })`
  font-weight: bold;
  padding-top: ${getTheme('smallSpacing')};
`;
export const Product = styled(FlatList).attrs({
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
  padding-top: 16px;
  margin-left: 5px;
`;
