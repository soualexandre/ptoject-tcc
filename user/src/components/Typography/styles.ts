import styled from 'styled-components/native';
import { getFontSize, getLineHeight, getTheme } from '~/utils';

type Props = {
  variant: TypographyType;
};

export const Text = styled.Text<Props>`
  color: ${getTheme('texts.dark')};
  font-family: 'Roboto-Regular';
  font-size: ${getFontSize}px;
  line-height: ${getLineHeight}px;
`;
