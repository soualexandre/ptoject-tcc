import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from '~/modules';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const IconSearch: FC<Props> = ({
  color = '#DADADA',
  width = moderateScale(18),
  height = moderateScale(18),
}) => (
  <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9125 11.4716H12.6956L16.8987 15.7316C17.3052 16.1416 17.3052 16.8116 16.8987 17.2216C16.4923 17.6316 15.8281 17.6316 15.4217 17.2216L11.2086 12.9716V12.1816L10.941 11.9016C9.55317 13.1016 7.65978 13.7216 5.64743 13.3816C2.8916 12.9116 0.690909 10.5916 0.353866 7.79157C-0.161612 3.56157 3.36743 0.00157288 7.56065 0.521573C10.3363 0.861573 12.6361 3.08157 13.102 5.86157C13.4391 7.89157 12.8245 9.80157 11.6349 11.2016L11.9125 11.4716ZM2.28691 6.97157C2.28691 9.46157 4.27943 11.4716 6.74778 11.4716C9.21613 11.4716 11.2086 9.46157 11.2086 6.97157C11.2086 4.48157 9.21613 2.47157 6.74778 2.47157C4.27943 2.47157 2.28691 4.48157 2.28691 6.97157Z"
      fill={color}
    />
  </Svg>
);

export default IconSearch;
