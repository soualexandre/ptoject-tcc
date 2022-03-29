import styled from 'styled-components/native';
import { Button, ScreenWrapper, Touchable, Typography } from '~/components';
import { getTheme } from '~/utils';

export const Wrapper = styled(ScreenWrapper)``;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  margin-horizontal: ${getTheme('screenSpacing')};
`;

export const Heading = styled(Typography).attrs({ variant: 'title2' })`
  font-weight: bold;
  text-align: center;
  color: ${getTheme('primary.main')};
  margin-top: ${getTheme('largeSpacing')};
`;

export const SubTitle = styled(Typography)`
  text-align: center;
  font-family: Roboto Light;
  margin-top: ${getTheme('mediumSpacing')};
`;

export const Next = styled(Button)`
  margin-top: ${getTheme('giantSpacing')};
  width: 100%;
`;

export const TouchNewFreight = styled(Touchable)`
  margin-top: ${getTheme('smallSpacing')};
`;
export const TextNewFreight = styled(Typography)``;
