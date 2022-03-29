import React, { FC } from 'react';
import { Center, Left, Right, Tag, Text, Wrapper } from './styles';

type Props = Invoice;

const RowTable: FC<Props> = ({ amount, month, status }) => (
  <Wrapper>
    <Left>
      <Text>{month}</Text>
    </Left>
    <Center>
      <Text>{amount}</Text>
    </Center>
    <Right>
      <Tag status={status} />
    </Right>
  </Wrapper>
);

export default RowTable;
