import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from '~/modules';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const iconFilter: FC<Props> = ({
  color = 'white',
  width = moderateScale(16),
  height = moderateScale(16),
}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <Path
      d="M0.250056 1.61C2.57006 4.59 6.00006 9 6.00006 9V14C6.00006 15.1 6.90006 16 8.00006 16C9.10006 16 10.0001 15.1 10.0001 14V9C10.0001 9 13.4301 4.59 15.7501 1.61C16.2601 0.95 15.7901 0 14.9501 0H1.04006C0.210056 0 -0.259944 0.95 0.250056 1.61Z"
      fill={color}
    />
  </Svg>
);

export default iconFilter;
