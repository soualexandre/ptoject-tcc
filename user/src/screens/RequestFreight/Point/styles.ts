import styled from 'styled-components/native';
import { Button as ButtonBase, ScreenWrapper, Typography } from '~/components';
import { Switch } from '~/modules';
import { getTheme } from '~/utils';

export const Button = styled(ButtonBase)`
  margin-top: ${getTheme('mediumSpacing')};
  margin-bottom: ${getTheme('mediumSpacing')};
`;

export const ReturnPoint = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${getTheme('borderOpacity')};
  padding-vertical: ${getTheme('largeSpacing')};
`;

export const Text = styled(Typography).attrs({ variant: 'headline' })`
  font-weight: bold;
  margin-top: ${getTheme('largeSpacing')};
`;

export const SwitchPointReturn = styled(Switch)``;

export const TextReturnPoint = styled(Typography).attrs({ variant: 'callout' })`
  margin-left: ${getTheme('mediumSpacing')};
`;

export const Container = styled.View`
  margin-horizontal: ${getTheme('screenSpacing')};
  flex: 1;
  justify-content: space-between;
`;

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.main')(props),
}))``;

export const Instruction = styled(Typography).attrs({ variant: 'callout' })`
  color: ${getTheme('gray')};
`;

export const NextWrapper = styled.View``;

export const ContentWrapper = styled.View.attrs({
  showsVerticalScrollIndicator: false,
})``;
