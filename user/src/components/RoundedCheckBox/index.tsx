import * as React from 'react';
import { Box, Text, Wrapper } from './styles';

type Props = {
  title: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  unavailable?: boolean;
};

const RoundedCheckBox: React.FC<Props> = ({
  title,
  value,
  onValueChange,
  unavailable,
  ...rest
}) => (
  <Wrapper {...rest}>
    <Box
      size={18}
      fillColor={unavailable ? 'grey' : 'green'}
      unfillColor="transparent"
      iconStyle={{ borderColor: 'grey' }}
      onPress={onValueChange}
      disableText
      bounceFriction={5}
      isChecked={value}
      disabled={unavailable}
    />
    <Text>{title}</Text>
  </Wrapper>
);

export default RoundedCheckBox;
