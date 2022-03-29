import styled from 'styled-components/native';

import { Icon } from '~/modules';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const StarOn = styled(Icon).attrs({
  name: 'star',
  color: '#FFCB3B',
})``;

export const StarOff = styled(Icon).attrs({
  name: 'star',
  color: '#E5E5E5',
})``;
