import styled from 'styled-components/native';
import { getTheme } from '~/utils';
import Touchable from '../Touchable';
import Typography from '../Typography';

type Props = {
  disabled: boolean;
};

export const Wrapper = styled(Touchable)<Props>`
  justify-content: center;
  align-items: center;
  background-color: ${({ disabled }) =>
    disabled ? getTheme('gray') : getTheme('primary.main')};
  height: 50px;
  border-radius: ${getTheme('mediumRadius')};
`;

export const Text = styled(Typography)`
  color: ${getTheme('primary.contrast')};
`;
