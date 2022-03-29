import React, { FC } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { moderateScale } from '~/modules';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const IconAdd: FC<Props> = ({
  color = '#00000035',
  width = moderateScale(42),
  height = moderateScale(28),
}) => (
  <Svg width={width} height={height} viewBox="0 0 42 28" fill="none">
    <Path
      d="M33.8625 10.57C32.6725 4.5325 27.37 0 21 0C15.9425 0 11.55 2.87 9.3625 7.07C4.095 7.63 0 12.0925 0 17.5C0 23.2925 4.7075 28 10.5 28H33.25C38.08 28 42 24.08 42 19.25C42 14.63 38.4125 10.885 33.8625 10.57ZM24.5 15.75V22.75H17.5V15.75H12.25L20.3875 7.6125C20.7375 7.2625 21.28 7.2625 21.63 7.6125L29.75 15.75H24.5Z"
      fill={color}
    />
  </Svg>
);

export default IconAdd;
