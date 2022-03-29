import { Image } from 'react-native';
import styled from 'styled-components/native';
import { IconAvatar } from '~/assets';
import { getTheme } from '~/utils';
import Touchable from '../Touchable';
import Typography from '../Typography';

export const Wrapper = styled(Touchable)`
  flex-direction: row;
  align-items: center;
  padding: ${getTheme('mediumSpacing')};
`;

export const Name = styled(Typography).attrs({ variant: 'title4' })`
  font-family: 'Roboto Bold';
  color: ${getTheme('primary.contrast')};
`;

export const ImageUser = styled(Image)`
  height: 74px;
  width: 74px;
  border-radius: ${getTheme('giantRadius')};
`;

export const EditProfile = styled(Typography).attrs({ variant: 'subhead' })`
  color: ${getTheme('primary.contrast')};
`;

export const ViewText = styled.View`
  margin-left: ${getTheme('largeSpacing')};
`;

export const WrapperIconClose = styled.View`
  margin-top: -${getTheme('moderateSpacing')};
  margin-left: ${getTheme('largeSpacing')};
`;

export const Avatar = styled(IconAvatar).attrs({
  width: 73,
  height: 73,
})``;
