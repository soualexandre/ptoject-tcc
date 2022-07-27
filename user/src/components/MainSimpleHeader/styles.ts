import styled from 'styled-components/native';
import { IconClose, IconLeft } from '~/assets';
import { getTheme } from '~/utils';
import TouchableDefault from '../Touchable';
import Typography from '../Typography';

const primaryContrast = getTheme('primary.main');
const smallSpacing = getTheme('smallSpacing');

export const Wrapper = styled.View`
  background-color: ${getTheme('primary.contrast')};
  padding: ${getTheme('mediumSpacing')};
`;

export const Title = styled(Typography).attrs({ variant: 'title2' })`
  font-family: 'Roboto-Regular';
  font-weight: bold;
  color: ${getTheme('primary.contrast')};
  padding-right: ${smallSpacing};
`;

export const Touchable = styled(TouchableDefault)``;

export const IconArea = styled.View`
  padding-vertical: 7px;
  padding-horizontal: ${smallSpacing};
  right: ${getTheme('smallerSpacing')};
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BlackView = styled.View`
  width: 16px;
  height: 16px;
`;

export const Left = styled(IconLeft).attrs((props) => ({
  color: primaryContrast(props),
}))``;
export const Close = styled(IconClose).attrs((props) => ({
  color: primaryContrast(props),
}))``;
