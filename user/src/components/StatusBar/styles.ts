import styled from 'styled-components/native';
import { getTheme, isIOS } from '~/utils';

type Props = {
  colorStatusBar: string;
};

export const Wrapper = styled.View<Props>`
  height: ${isIOS() ? getTheme('statusBarSpacing') : 0};
  background-color: ${({ colorStatusBar }) => colorStatusBar};
`;
