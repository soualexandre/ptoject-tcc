import styled, { css } from 'styled-components/native';
import { scale } from '~/modules';
import { getTheme } from '~/utils';
import Touchable from '../Touchable';
import Typography from '../Typography';

type PropsType = {
  focus: boolean;
};

const getColor = (focus: boolean) =>
  focus ? getTheme('primary.contrast') : getTheme('texts.light');
const getFontWeight = (focus: boolean): string => (focus ? 'bold' : '400');

const focusType = css`
  background-color: ${getTheme('primary.main')};
  color: ${getTheme('texts.light')};
  font-weight: 400;
`;

export const Wrapper = styled.View``;

export const Text = styled(Typography).attrs({ variant: 'headline' })`
  font-weight: bold;
`;

export const TitleAndInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${getTheme('moderateSpacing')};
`;

export const Type = styled(Touchable)<PropsType>`
  width: ${scale(104)}px;
  align-items: center;
  ${({ focus }) => focus && focusType};
  padding: ${getTheme('smallerSpacing')};
`;

export const Title = styled(Typography).attrs({
  variant: 'callout',
})<PropsType>`
  color: ${({ focus }) => getColor(focus)};
  font-weight: ${({ focus }) => getFontWeight(focus)};
`;

export const SelectionOptions = styled.View`
  flex-direction: row;
  align-self: center;
  border-radius: ${getTheme('mediumRadius')};
  background-color: ${getTheme('tertiary.main')};
`;
