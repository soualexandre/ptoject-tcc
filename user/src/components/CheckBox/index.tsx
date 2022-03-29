import * as React from 'react';
import { Box, Text, Wrapper } from './styles';

type Props = {
  title: string;
  value: boolean;
  boxType?: 'square' | 'circle';
  disabled?: boolean;
  onValueChange: (value: boolean) => void;
};

const Button: React.FC<Props> = ({
  title,
  boxType = 'square',
  disabled = false,
  value,
  onValueChange,
  ...rest
}) => (
  <Wrapper {...rest}>
    <Box
      boxType={boxType}
      disabled={disabled}
      value={value}
      onValueChange={onValueChange}
    />
    <Text>{title}</Text>
  </Wrapper>
);

export default Button;
