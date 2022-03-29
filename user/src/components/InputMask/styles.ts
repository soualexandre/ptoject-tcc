import styled from 'styled-components/native';
import Touchable from '../Touchable';

type TouchableProps = {
  position: number;
};

export const TouchableInput = styled(Touchable)<TouchableProps>`
  position: absolute;
  top: ${({ position }) => 20 + position * 80}px;
  right: 0;
  width: 28px;
`;
