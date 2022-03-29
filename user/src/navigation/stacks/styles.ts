import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Typography } from '~/components';
import { getTheme } from '~/utils';

const screenWidth = Dimensions.get('window').width;

export const NameDrawer = styled(Typography).attrs({ variant: 'headline' })`
  color: ${getTheme('primary.contrast')};
  font-size: ${screenWidth / 24}px;
`;

export const DrawerTextLogout = styled(Typography).attrs({
  variant: 'headline',
})`
  color: ${getTheme('primary.contrast')};
`;
