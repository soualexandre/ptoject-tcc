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
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const Text = styled(Typography).attrs({ variant: 'headline' })`
  font-weight: bold;
`;

export const TitleAndInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${getTheme('moderateSpacing')};
`;

export const Type = styled(Touchable)<PropsType>`
  width: ${scale(120)}px;
  align-items: center;
  color: ${({ focus }) => getColor(focus)};
  font-weight: ${({ focus }) => getFontWeight(focus)};
  ${({ focus }) => focus && focusType};
  padding: ${getTheme('smallSpacing')};
`;
