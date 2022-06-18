import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from '~/modules';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const IconMenu: FC<Props> = ({
  color = '#44564D',
  width = moderateScale(18),
  height = moderateScale(12),
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 12" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 2C0.45 2 0 1.55 0 1C0 0.45 0.45 0 1 0H17C17.55 0 18 0.45 18 1C18 1.55 17.55 2 17 2H1ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12Z"
      fill={color}
    />
  </Svg>
);

export default IconMenu;
