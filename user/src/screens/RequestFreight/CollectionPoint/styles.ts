import styled from 'styled-components/native';
import {
  Button,
  DropDown,
  ScreenWrapper,
  TextInput,
  Touchable,
  UploadLogo,
} from '~/components';
import { getTheme } from '~/utils';

const mediumSpacing = getTheme('mediumSpacing');
const smallSpacing = getTheme('smallSpacing');

export const Container = styled.View`
  margin-horizontal: ${getTheme('screenSpacing')};
  margin-top: ${getTheme('moderateSpacing')};
`;

export const Input = styled(TextInput)`
  margin-bottom: ${smallSpacing};
  margin-top: ${smallSpacing};
`;

export const UploadImageLocal = styled(UploadLogo)`
  margin-top: ${getTheme('mediumSpacing')};
`;

export const Next = styled(Button)`
  margin-top: ${getTheme('sectionLargeSpacing')};
  margin-bottom: ${mediumSpacing};
`;

export const TypeAddress = styled(DropDown)``;

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.main')(props),
}))``;

export const TouchableInput = styled(Touchable)`
  width: 100%;
`;
