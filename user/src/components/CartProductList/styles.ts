import { FlatList, Image, Text, TextInput } from 'react-native';

import { Rating } from 'react-native-ratings';
import styled from 'styled-components/native';
import { IconStar } from '~/assets';
import { getTheme } from '~/utils';
// import TextInput from '../TextInput';
import Touchable from '../Touchable';
import Typography from '../Typography';

export const Wrapper = styled.View`
  padding-horizontal: ${getTheme('screenSpacing')};
`;
export const InputText = styled(TextInput)`
  text-align: center;
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
`;

type ColumnProps = {
  flex?: number;
};

export const ColumnInput = styled.View<ColumnProps>``;
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
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-top: 3px;
`;
export const ButtonAddRemove = styled(Touchable)`
  width: 20px;
  height: 20px;
  padding: 2px;
  background-color: #669b7d;
  display: flex;
  align-items: center;
`;
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
export const Link = styled(Typography).attrs({ variant: 'subhead' })``;
export const QtdType = styled(Text)`
  margin-right: 10px;
  color: #9ea1a6;
`;
export const ProductList = styled(Typography).attrs({ variant: 'subhead' })`
  padding-top: 5px;
`;
export const Star = styled(Typography).attrs({ variant: 'subhead' })`
  padding-top: 16px;
  margin-left: 5px;
`;
