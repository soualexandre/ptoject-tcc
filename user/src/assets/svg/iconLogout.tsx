import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from '~/modules';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const IconLogout: FC<Props> = ({
  color = '#FFFFFF',
  width = moderateScale(20),
  height = moderateScale(24),
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 24" fill="none">
    <Path
      d="M13.21 14.88L11.33 13L20 13C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11L11.33 11L13.21 9.11C13.6 8.72 13.6 8.09 13.21 7.7C13.0232 7.51275 12.7695 7.40751 12.505 7.40751C12.2405 7.40751 11.9868 7.51275 11.8 7.7L8.21 11.29C7.82 11.68 7.82 12.31 8.21 12.7L11.8 16.29C12.19 16.68 12.82 16.68 13.21 16.29C13.6 15.9 13.6 15.27 13.21 14.88ZM6 19L11 19C11.55 19 12 19.45 12 20C12 20.55 11.55 21 11 21L5 21C3.9 21 3 20.1 3 19L3 5C3 3.9 3.9 3 5 3L11 3C11.55 3 12 3.45 12 4C12 4.55 11.55 5 11 5L6 5C5.45 5 5 5.45 5 6L5 18C5 18.55 5.45 19 6 19Z"
      fill={color}
    />
  </Svg>
);

export default IconLogout;
