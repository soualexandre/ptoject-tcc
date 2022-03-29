import styled from 'styled-components/native';
import { IconAdd, IconClose } from '~/assets';
import { Icon } from '~/modules';
import { getTheme } from '~/utils';
import Touchable from '../Touchable';
import Typography from '../Typography';

const mediumSpacing = getTheme('mediumSpacing');
const primaryMain = getTheme('primary.main');
const failureMain = getTheme('failure.main');
const screenSpacing = getTheme('screenSpacing');
const primaryLighter = getTheme('primary.lighter');
const primaryContrast = getTheme('primary.contrast');
const giantRadius = getTheme('giantRadius');
const colorBorder = getTheme('border');

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-vertical: ${screenSpacing};
  border-bottom-width: 1px;
  border-bottom-color: ${getTheme('borderOpacity')};
`;

export const Information = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Point = styled(Typography).attrs({ variant: 'callout' })``;

export const CirclePoint = styled.View`
  background-color: ${primaryLighter};
  border-radius: ${giantRadius};
  height: 42px;
  width: 42px;
  align-items: center;
  justify-content: center;
`;

export const Address = styled(Typography).attrs({ variant: 'footnote' })``;

export const ButtonOption = styled(Touchable)``;

export const ButtonPlus = styled(Touchable)`
  background-color: ${primaryMain};
  border-radius: ${giantRadius};
`;

export const SubAddress = styled(Typography).attrs({ variant: 'caption1' })`
  color: ${colorBorder};
  text-align: right;
`;

export const WrapperSubAddress = styled.View`
  margin-left: ${mediumSpacing};
`;

export const WrapperIcon = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 70px;
`;

export const Close = styled(Icon).attrs((props) => ({
  name: 'close',
  color: failureMain(props),
  size: 28,
}))``;

export const Add = styled(IconAdd).attrs((props) => ({
  color: primaryContrast(props),
}))``;

export const IconPencil = styled(Icon).attrs((props) => ({
  name: 'pencil',
  size: 28,
  color: primaryMain(props),
}))`
  margin-right: ${mediumSpacing};
`;
