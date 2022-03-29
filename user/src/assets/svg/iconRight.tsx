import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from '~/modules';

type Props = {
  color?: string;
  width?: number;
  height?: number;
  opacity?: string;
};
const IconRight: FC<Props> = ({
  color = '#ffffff',
  width = moderateScale(8),
  height = moderateScale(12),
  opacity = '0.6',
}) => (
  <Svg width={width} height={height} viewBox="0 0 8 12" fill="none">
    <Path
      d="M1.28957 9.88L5.16957 6L1.28957 2.12C0.89957 1.73 0.89957 1.1 1.28957 0.71C1.67957 0.32 2.30957 0.32 2.69957 0.71L7.28957 5.3C7.67957 5.69 7.67957 6.32 7.28957 6.71L2.69957 11.3C2.30957 11.69 1.67957 11.69 1.28957 11.3C0.90957 10.91 0.89957 10.27 1.28957 9.88Z"
      fill={color}
      fillOpacity={opacity}
    />
  </Svg>
);

export default IconRight;
