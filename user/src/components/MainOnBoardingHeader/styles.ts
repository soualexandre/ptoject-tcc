import styled from 'styled-components/native';
import { IconClose, IconLeft } from '~/assets';
import { getTheme } from '~/utils';
import TouchableDefault from '../Touchable';
import Typography from '../Typography';

const primaryContrast = getTheme('primary.contrast');

export const Wrapper = styled.View`
  background-color: ${getTheme('primary.main')};
  padding: ${getTheme('mediumSpacing')};
`;

export const Title = styled(Typography).attrs({ variant: 'title2' })`
  font-family: 'Roboto-Regular';
  font-weight: bold;
  align-self: center;
  margin-left: ${getTheme('sectionSpacing')};
  color: ${getTheme('primary.contrast')};
`;

export const Touchable = styled(TouchableDefault)`
  align-items: flex-start;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

export const TouchableArea = styled.View``;

export const Container = styled.View`
  flex-direction: row;
`;

export const Left = styled(IconLeft).attrs((props) => ({
  color: primaryContrast(props),
}))``;
export const Close = styled(IconClose).attrs((props) => ({
  color: primaryContrast(props),
}))``;
