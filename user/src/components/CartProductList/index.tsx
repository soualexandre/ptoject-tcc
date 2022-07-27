import React, { FC, useState } from 'react';
import { array } from 'yup';
import { isEmpty } from '~/modules';

import {
  ButtonAddRemove,
  Column,
  InputText,
  Link,
  QtdType,
  Row,
  Value,
  Wrapper,
} from './styles';

type Props = {
  products: {
    product_name: string;
  };
  addRemoveItem: string | number;
};

const CartProductList: FC<Props> = ({ products, ...props }) => {
  const i = 0;
  const [addRemoveItem, setAddRemoveItem] = useState(0);
  const onChangeQtdItems = (value: number) => {
    value === 0
      ? setAddRemoveItem(parseInt(addRemoveItem) - 1)
      : setAddRemoveItem(parseInt(addRemoveItem) + 1);
  };
  console.log(addRemoveItem);
  const arrayPRoductValue = [];
  arrayPRoductValue.push(addRemoveItem);
  return (
    <Wrapper {...props}>
      <Row>
        <Column flex={8}>
          <Link>{products.product_name}</Link>
        </Column>
        <Row>
          <QtdType>kg</QtdType>
          <ButtonAddRemove onPress={() => onChangeQtdItems(0)}>
            <Value>-</Value>
          </ButtonAddRemove>
          <InputText
            onChangeText={setAddRemoveItem}
            value={addRemoveItem.toString()}
            keyboardType="numeric"
            min={0}
          />
          <ButtonAddRemove onPress={() => onChangeQtdItems(1)}>
            <Value>+</Value>
          </ButtonAddRemove>
        </Row>
      </Row>
    </Wrapper>
  );
};

export default CartProductList;
