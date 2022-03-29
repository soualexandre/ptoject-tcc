import styled from 'styled-components/native';
import { Button, CheckBox, ScreenWrapper, Typography } from '~/components';
import { getTheme } from '~/utils';

const mediumSpacing = getTheme('mediumSpacing');

export const Heading = styled(Typography)`
  margin-top: ${getTheme('moderateSpacing')};
`;

export const Check = styled(CheckBox)`
  margin-top: ${getTheme('largeSpacing')};
`;

export const Next = styled(Button)`
  margin-top: ${getTheme('sectionLargeSpacing')};
  margin-bottom: ${mediumSpacing};
`;

export const Container = styled.View`
  margin-horizontal: ${getTheme('screenSpacing')};
  flex: 1;
  justify-content: space-between;
`;

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.main')(props),
}))`
  flex: 1;
`;
