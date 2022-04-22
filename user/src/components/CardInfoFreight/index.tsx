import React, { FC } from 'react';
import {
  Column,
  ImageCompany,
  Link,
  Product,
  ProductList,
  Row,
  Star,
  Title,
  Value,
  Wrapper,
} from './styles';

type Props = {
  link: string;
  title: string;
  productList: string | any;
  product: string;
  value: string | number;
  star: string;
};

const CardInfoFreight: FC<Props> = ({
  link,
  title,
  value,
  product,
  star,
  productList,
  ...props
}) => (
  <>
    <Wrapper {...props}>
      <Row>
        <Column flex={2}>
          <Title>{title}</Title>
          <Value>{value}</Value>
          <Star>{star}</Star>
          <Product
            data={Product}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item: Product }) => (
              <MiniCardFilterProduct product={Product} />
            )}
          />
        </Column>
        <Column>
          <ImageCompany
            source={{
              uri: link,
            }}
          />
        </Column>
      </Row>
    </Wrapper>
  </>
);

export default CardInfoFreight;
