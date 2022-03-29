import styled from 'styled-components/native';
import { Button, ScreenWrapper, TextInput } from '~/components';
import { getTheme } from '~/utils';

const mediumSpacing = getTheme('mediumSpacing');

export const Drop = styled(TextInput)`
  margin-bottom: ${getTheme('smallSpacing')};
  margin-top: ${getTheme('smallSpacing')};
`;

export const Container = styled.View`
  margin-horizontal: ${getTheme('screenSpacing')};
  margin-top: ${getTheme('moderateSpacing')};
`;

export const Input = styled(TextInput)`
  margin-bottom: ${getTheme('smallSpacing')};
`;

export const Next = styled(Button)`
  margin-top: ${getTheme('sectionLargeSpacing')};
  margin-bottom: ${mediumSpacing};
`;

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.main')(props),
}))``;
