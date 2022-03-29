import { Hoshi } from 'react-native-textinput-effects';
import styled from 'styled-components/native';
import { RFValue, getTheme } from '~/utils';
import Typography from '../Typography';

const primaryMain = getTheme('primary.main');
const dark = getTheme('dark');

export const Wrapper = styled.View``;

export const Error = styled(Typography).attrs({ variant: 'subhead' })`
  color: ${getTheme('failure.main')};
  margin-top: -${getTheme('minimumSpacing')};
`;

export const TextHoshi = styled(Hoshi).attrs((props) => ({
  borderColor: primaryMain(props),
  borderHeight: 1,
  labelStyle: {
    fontSize: RFValue(14),
    textAlign: 'left',
    start: -16,
  },
  inputStyle: {
    fontSize: RFValue(14),
    fontWeight: 'normal',
    color: dark(props),
    display: 'none',
  },
}))`
  border-bottom-width: 1px;
  border-bottom-color: ${getTheme('border')};
`;
