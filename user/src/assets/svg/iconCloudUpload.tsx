import React, { FC } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { moderateScale } from '~/modules';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const iconCloudUpload: FC<Props> = ({
  color = 'black',
  width = moderateScale(42),
  height = moderateScale(42),
}) => (
  <Svg width={width} height={height} viewBox="0 0 42 42" fill="none">
    <G opacity="0.2">
      <Path
        d="M33.8625 17.57C32.6725 11.5325 27.37 7 21 7C15.9425 7 11.55 9.87 9.3625 14.07C4.095 14.63 0 19.0925 0 24.5C0 30.2925 4.7075 35 10.5 35H33.25C38.08 35 42 31.08 42 26.25C42 21.63 38.4125 17.885 33.8625 17.57ZM24.5 22.75V29.75H17.5V22.75H12.25L20.3875 14.6125C20.7375 14.2625 21.28 14.2625 21.63 14.6125L29.75 22.75H24.5Z"
        fill={color}
      />
    </G>
  </Svg>
);

export default iconCloudUpload;
