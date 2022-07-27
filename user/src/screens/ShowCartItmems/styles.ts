import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { ScreenWrapper } from '~/components';
import { getTheme } from '~/utils';

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.contrast')(props),
}))`
  flex: 1;
`;
