import styled from 'styled-components/native';
import { getTheme } from '~/utils';
import Button from '../Button';
import TagDefault from '../Tag';
import Touchable from '../Touchable';
import Typography from '../Typography';

const normalSpacing = getTheme('normalSpacing');
const smallerSpacing = getTheme('smallerSpacing');

export const Wrapper = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-vertical: ${smallerSpacing};
`;

type ColumnProps = {
  flex?: number;
};
export const Column = styled.View<ColumnProps>`
  align-items: flex-start;
  justify-content: center;
  flex: ${({ flex }) => flex || 1};
`;
export const Title = styled(Typography).attrs({ variant: 'headline' })`
  color: ${getTheme('texts.main')};
  font-weight: bold;
  margin-top: ${getTheme('largeSpacing')};
  margin-bottom: ${getTheme('minimumSpacing')};
`;
export const Heading = styled(Typography).attrs({ variant: 'subhead' })`
  color: ${getTheme('texts.dark')};
  opacity: 0.3;
`;

export const Text = styled(Typography).attrs({ variant: 'callout' })`
  color: ${getTheme('texts.main')};
`;

export const Tag = styled(TagDefault)`
  margin-top: ${getTheme('minimumSpacing')};
`;

export const TotalText = styled(Typography)`
  font-weight: bold;
  color: ${getTheme('primary.main')};
  margin-right: ${normalSpacing};
`;

export const TouchableRow = styled(Touchable)``;

export const Buttom = styled(Button)`
  margin-right: ${normalSpacing};
  background-color: ${getTheme('primary.light')};
`;
