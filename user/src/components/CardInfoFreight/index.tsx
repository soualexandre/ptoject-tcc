import React, { FC } from 'react';
import MiniCardProductsCompanies from '../MiniCardProductsCompanies';

import {
  Column,
  ColumnIconStar,
  ColumnImage,
  ColumnStar,
  ImageCompany,
  Link,
  Product,
  ProductList,
  RatingStar,
  Row,
  RowStar,
  Separator,
  Star,
  StarIcon,
  Title,
  Value,
  Wrapper,
} from './styles';

type Props = {
  link: string;
  title: string;
  productList: string | any;
  product: any;
  value: string | number;
  star: string;
  toFixed: number;
};
const renderSeparator = (): JSX.Element => <Separator />;
const CardInfoFreight: FC<Props> = ({
  link,
  title,
  value,
  product,
  star,
  productList,
  ...props
}) => {
  const avaliation = star.toFixed(1);
  return (
    <>
      <Wrapper {...props}>
        <Row>
          <ColumnImage flex={1}>
            <ImageCompany
              source={{
                uri: link,
              }}
            />
          </ColumnImage>
          <Column flex={4}>
            <Title>{title}</Title>
            <Value>{value}</Value>

            <MiniCardProductsCompanies product={product} />
          </Column>
          <ColumnStar>
            <Row>
              <Column>
                <Star>{avaliation}</Star>
              </Column>
              <ColumnIconStar>
                <StarIcon width={18} height={18} />
              </ColumnIconStar>
            </Row>
          </ColumnStar>
        </Row>
      </Wrapper>
    </>
  );
};

export default CardInfoFreight;
