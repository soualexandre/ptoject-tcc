import * as React from 'react';
import { Text } from './styles';

type Props = {
  variant?: TypographyType;
};

const Typography: React.FC<Props> = ({
  variant = 'body',
  children,
  ...rest
}) => (
  <Text variant={variant} {...rest}>
    {children}
  </Text>
);

export default Typography;
