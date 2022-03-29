import styled from 'styled-components/native';
import { CheckBox } from '~/modules';
import { getTheme } from '~/utils';
import Typography from '../Typography';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled(Typography).attrs({ variant: 'callout' })`
  margin-left: ${getTheme('smallerSpacing')};
`;

export const Box = styled(CheckBox).attrs({
  style: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
})`
  height: 22px;
  width: 22px;
`;
