import styled from 'styled-components/native';
import { Button, ScreenWrapper, Typography } from '~/components';
import { getTheme } from '~/utils';

const screenSpacing = getTheme('screenSpacing');
const colorGray = getTheme('gray');
const smallRadius = getTheme('smallRadius');

export const InformatingNewFreight = styled.View`
  margin-top: -${getTheme('moderateSpacing')};
  z-index: 999;
  background-color: ${getTheme('primary.contrast')};
  padding: ${getTheme('mediumSpacing')};
  border-radius: ${smallRadius};
  shadow-color: ${getTheme('secondary.shadow')};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: ${smallRadius};
  elevation: 3;
`;
export const Next = styled(Button)``;

export const Title = styled(Typography).attrs({ variant: 'callout' })`
  margin-bottom: ${screenSpacing};
`;
export const StepsRow = styled.View`
  flex-direction: row;
`;
export const StepsNumber = styled(Typography).attrs({ variant: 'subhead' })`
  margin-right: ${getTheme('smallerSpacing')};
  color: ${colorGray};
`;
export const StepsName = styled(Typography).attrs({ variant: 'subhead' })`
  color: ${colorGray};
`;
export const Container = styled.View`
  padding-horizontal: ${screenSpacing};
  flex: 1;
  justify-content: space-between;
`;

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.main')(props),
}))`
  flex: 1;
`;
