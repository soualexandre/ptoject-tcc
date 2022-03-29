import React, { FC } from 'react';
import { Path, Svg } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};

const IconStar: FC<Props> = ({ width = 25, height = 40 }) => (
  <Svg width={width} height={height} viewBox="0 0 100 100">
    <Path
      d="M50,3l12,36h38l-30,22l11,36l-31-21l-31,21l11-36l-30-22h38z"
      fill="#FF0"
      stroke="#FC0"
      stroke-width="2"
    />
  </Svg>
);

export default IconStar;
