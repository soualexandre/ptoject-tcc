import React, { FC } from 'react';
import { View } from 'react-native';
import { ListCompnyProduct, Text, ViewMore, Wrapper } from './styles';

type Props = {
  product: any;
};
const MiniCardProductsCompanies: React.FC<Props> = ({ product, ...props }) => (
  <Wrapper {...props}>
    <ListCompnyProduct
      data={product}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item: product }) => <Text>{product.product_name}</Text>}
    />
  </Wrapper>
);

export default MiniCardProductsCompanies;
