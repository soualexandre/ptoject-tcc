import React, { FC } from 'react';
import { Text } from 'react-native';
import { FilterHorizontal, Image, Row, Wrapper } from './styles';

type Props = {
  product: string;
};
const ProductsCardComponent: React.FC<Props> = ({ product, ...props }) => (
  <Wrapper {...props}>
    <Row>
      <Text />
    </Row>
  </Wrapper>
);

export default ProductsCardComponent;
