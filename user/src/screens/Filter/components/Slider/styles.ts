import styled from 'styled-components/native';
import { getTheme } from '~/utils';

const screenSpacing = getTheme('screenSpacing');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const secondaryMain = getTheme('secondary.main');
const gray = getTheme('gray');
export const Wrapper = styled.View`
  align-items: center;
  padding: ${screenSpacing};
  background-color: ${primaryMain};
  border-radius: ${screenSpacing};
`;
export const Text = styled.Text`
  color: ${secondaryMain};
  font-size: 16px;
`;

export const ThumbView = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${primaryMain};
  background-color: ${primaryContrast};
`;

export const RailView = styled.View`
  flex: 1px;
  height: 4px;
  border-radius: 2px;
  background-color: ${gray};
`;

export const RailSelectedView = styled.View`
  height: 4px;
  background-color: ${primaryMain};
  border-radius: 2px;
`;

export const NotchView = styled.View`
  width: 8px;
  height: 8px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: ${primaryMain};
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-width: 8px;
`;
