import { Image } from 'react-native';
import styled from 'styled-components/native';
import { IconAvatar } from '~/assets';
import { ScreenWrapper, Touchable, Typography } from '~/components';
import { Icon } from '~/modules';
import { getTheme } from '~/utils';

const primaryColor = getTheme('primary.contrast');
const textColor = getTheme('texts.main');
const gray = getTheme('gray');

const mediumSpacing = getTheme('mediumSpacing');

export const Button = styled(Touchable)`
  flex-direction: row;
  align-items: center;
  border-radius: ${getTheme('smallRadius')};
  margin: ${mediumSpacing};
`;

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: primaryColor(props),
}))`
  flex: 1;
`;

export const MenuList = styled(Typography)`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${textColor};
`;

export const MenuIcons = styled(Icon)`
  font-size: 26px;
  color: ${gray};
`;

export const Text = styled(Typography)`
  font-weight: normal;
  text-align: center;
  margin-left: ${getTheme('smallSpacing')};
`;

export const Name = styled(Typography).attrs({ variant: 'title4' })`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${textColor};
`;

export const ImageUser = styled(Image)`
  height: 74px;
  width: 74px;
  border-radius: 40px;

  border-width: 1px;
  border-color: ${getTheme('primary.main')};
`;

export const ViewText = styled.View`
  margin-left: ${getTheme('largeSpacing')};
`;

export const Avatar = styled(IconAvatar).attrs({
  width: 73,
  height: 73,
})``;

export const FormWrapper = styled(Touchable)`
  flex-direction: row;
  align-items: center;
  padding: ${mediumSpacing};
`;
