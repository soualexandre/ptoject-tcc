import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from '~/modules';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const IconClose: FC<Props> = ({
  color = '#669B7D',
  width = moderateScale(14),
  height = moderateScale(14),
}) => (
  <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
    <Path
      d="M13.3 0.710001C12.91 0.320001 12.28 0.320001 11.89 0.710001L6.99997 5.59L2.10997 0.700001C1.71997 0.310001 1.08997 0.310001 0.699971 0.700001C0.309971 1.09 0.309971 1.72 0.699971 2.11L5.58997 7L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.41L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 7L13.3 2.11C13.68 1.73 13.68 1.09 13.3 0.710001Z"
      fill={color}
    />
  </Svg>
);

export default IconClose;
