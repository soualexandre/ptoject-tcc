import React, { FC } from 'react';
import { ActivityIndicatorProps } from 'react-native';
import { Wrapper } from './styles';

const LoadingIndicator: FC<ActivityIndicatorProps> = ({ ...props }) => (
  <Wrapper {...props} />
);

export default LoadingIndicator;
