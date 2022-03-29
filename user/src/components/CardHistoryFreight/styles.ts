import styled from 'styled-components/native';
import { getTheme } from '~/utils';
import Button from '../Button';
import TagDefault from '../Tag';
import Typography from '../Typography';

const normalSpacing = getTheme('normalSpacing');
const smallerSpacing = getTheme('smallerSpacing');

export const Wrapper = styled.View`
  width: 100%;
  background-color: ${getTheme('primary.contrast')};
  padding-top: ${normalSpacing};
  padding-bottom: ${smallerSpacing};
  padding-left: ${normalSpacing};
  border-radius: ${smallerSpacing};
  shadow-color: ${getTheme('secondary.shadow')};
  shadow-offset: 10px 2px;
  shadow-opacity: 0.1;
  elevation: 2;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: ${getTheme('minimumSpacing')};
`;

type ColumnProps = {
  flex?: number;
};

export const Column = styled.View<ColumnProps>`
  flex: ${({ flex }) => flex || 1};
`;
export const ColumnDet = styled.View<ColumnProps>`
  margin-top: -${smallerSpacing};
  align-items: flex-end;
  margin-right: ${normalSpacing};
  flex: ${({ flex }) => flex || 1};
`;

export const Heading = styled(Typography).attrs({ variant: 'callout' })`
  color: ${getTheme('texts.dark')};
  opacity: 0.3;
  margin-bottom: ${getTheme('minimumSpacing')};
`;

export const Text = styled(Typography).attrs({ variant: 'callout' })`
  color: ${getTheme('texts.main')};
`;

export const Tag = styled(TagDefault)`
  margin-top: -${smallerSpacing};
  align-items: flex-end;
  margin-right: ${normalSpacing};
`;

export const TextBold = styled(Typography).attrs({ variant: 'callout' })`
  padding-right: ${normalSpacing};
`;

export const TotalText = styled(Typography).attrs({ variant: 'callout' })`
  color: ${getTheme('primary.light')};
  font-weight: bold;
`;

export const Buttom = styled(Button)`
  margin-right: ${normalSpacing};
  background-color: ${getTheme('primary.light')};
  margin-top: ${smallerSpacing};
  margin-bottom: ${smallerSpacing};
`;
