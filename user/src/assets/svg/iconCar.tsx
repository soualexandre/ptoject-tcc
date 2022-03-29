import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from '~/modules';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const iconAdd: FC<Props> = ({
  color = 'white',
  width = moderateScale(24),
  height = moderateScale(24),
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3.11 11.68C3.04 11.89 3 12.11 3 12.34V19.5C3 20.33 3.67 21 4.5 21C5.33 21 6 20.33 6 19.5V19H18V19.5C18 20.32 18.67 21 19.5 21C20.32 21 21 20.33 21 19.5V12.34C21 12.12 20.96 11.89 20.89 11.68L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.27 7.18C6.41 6.78 6.79 6.5 7.22 6.5H16.78C17.21 6.5 17.59 6.78 17.73 7.18L19 11H5Z"
      fill={color}
    />
  </Svg>
);

export default iconAdd;
