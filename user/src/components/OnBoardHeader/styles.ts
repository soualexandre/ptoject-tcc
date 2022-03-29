import styled from 'styled-components/native';
import { getTheme } from '~/utils';
import TouchableDefault from '../Touchable';
import Typography from '../Typography';

type PropsTitle = {
  colorTitle?: string;
};

const moderateSpacing = getTheme('moderateSpacing');

export const Wrapper = styled.View``;

export const Title = styled(Typography).attrs({
  variant: 'largeTitle',
})<PropsTitle>`
  font-weight: bold;
  color: ${({ colorTitle }) => colorTitle || getTheme('dark')};
  padding-top: ${moderateSpacing};
  padding-bottom: ${getTheme('normalSpacing')};
`;

export const Description = styled(Typography).attrs({ variant: 'callout' })`
  font-family: Roboto Light;
  padding-bottom: ${moderateSpacing};
  color: ${getTheme('texts.light')};
`;

export const Touchable = styled(TouchableDefault)`
  align-items: flex-start;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const TouchableArea = styled.View``;
