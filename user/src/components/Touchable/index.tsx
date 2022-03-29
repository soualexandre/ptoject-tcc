import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Wrapper } from './styles';

const Touchable: React.FC<TouchableOpacityProps> = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

export default Touchable;
