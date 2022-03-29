import React, { FC } from 'react';
import { Text } from 'react-native';
import { FilterHorizontal, Image, Row, Wrapper } from './styles';

type Props = {
  product: string;
};
const MiniCardFilterProduct: React.FC<Props> = ({ product, ...props }) => (
  <Wrapper {...props}>
    <Row>
      <Text>{product.text}</Text>
    </Row>
  </Wrapper>
);

export default MiniCardFilterProduct;
