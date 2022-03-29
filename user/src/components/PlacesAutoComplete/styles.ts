import styled from 'styled-components/native';
import { ScreenWrapper } from '~/components';
import { Modal as ModalBase } from '~/modules';
import { getTheme } from '~/utils';

const primaryContrast = getTheme('primary.contrast');
const primaryMain = getTheme('primary.main');

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: primaryMain(props),
  colorIcon: primaryContrast(props),
  colorTitle: primaryContrast(props),
}))`
  background-color: ${primaryMain};
  padding: ${getTheme('screenSpacing')};
  flex: 1;
`;

// export const Modal = styled(ModalBase)``;
