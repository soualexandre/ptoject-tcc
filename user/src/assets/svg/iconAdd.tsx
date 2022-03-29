import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from '~/modules';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const IconAdd: FC<Props> = ({
  color = '#6EB986',
  width = moderateScale(31),
  height = moderateScale(31),
}) => (
  <Svg width={width} height={height} viewBox="0 0 31 31" fill="none">
    <Path
      d="M19.6578 16.1666H16.0174V19.807C16.0174 20.2074 15.6898 20.535 15.2894 20.535C14.8889 20.535 14.5613 20.2074 14.5613 19.807V16.1666H10.9209C10.5205 16.1666 10.1929 15.839 10.1929 15.4385C10.1929 15.0381 10.5205 14.7105 10.9209 14.7105H14.5613V11.0701C14.5613 10.6697 14.8889 10.342 15.2894 10.342C15.6898 10.342 16.0174 10.6697 16.0174 11.0701V14.7105H19.6578C20.0582 14.7105 20.3859 15.0381 20.3859 15.4385C20.3859 15.839 20.0582 16.1666 19.6578 16.1666Z"
      fill={color}
    />
  </Svg>
);

export default IconAdd;
