import React, { FC, memo } from 'react';
import { Text, Wrapper } from './styles';

type Props = {
  text: string;
  currencyFormat(value: string): string;
};
const Label: FC<Props> = ({ text, currencyFormat, ...props }) => (
  <Wrapper {...props}>
    <Text>{currencyFormat(text)}</Text>
  </Wrapper>
);

export default memo(Label);
