import React, { FC, useContext } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import If from '../If';
import LoadingIndicator from '../LoadingIndicator';

import { Text, Wrapper } from './styles';

type Props = TouchableOpacityProps & {
  isLoading?: boolean;
  disabled?: boolean;
};

const Button: FC<Props> = ({
  children,
  isLoading = false,
  disabled = false,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper {...props} disabled={isLoading || disabled}>
      <If condition={!isLoading}>
        <Text>{children}</Text>
      </If>
      <If condition={isLoading}>
        <LoadingIndicator color={theme.primary.contrast} />
      </If>
    </Wrapper>
  );
};

export default Button;
