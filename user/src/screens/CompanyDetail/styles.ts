import styled from 'styled-components/native';
import {
  Button,
  CardInfoFreight,
  FreightStatus,
  LoadingIndicator,
  ScreenWrapper,
  TypeService,
  Typography,
  ValuesServices,
} from '~/components';
import { getTheme } from '~/utils';

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.contrast')(props),
}))`
  flex: 1;
`;
