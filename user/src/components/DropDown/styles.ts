import styled from 'styled-components/native';
import { SelectDropdown } from '~/modules';
import { getTheme } from '~/utils';
import Typography from '../Typography';

const textsMain = getTheme('texts.main');
const primaryMainContrast = getTheme('primary.contrast');

export const Wrapper = styled.View`
  border-bottom-width: 1px;
`;

export const Title = styled(Typography).attrs({ variant: 'subhead' })`
  color: ${getTheme('texts.light')};
`;

export const Select = styled(SelectDropdown).attrs((props) => ({
  buttonStyle: {
    width: '100%',
    height: 26,
    marginBottom: 15,
    backgroundColor: primaryMainContrast(props),
  },
  rowTextStyle: {
    color: textsMain(props),
    textAlign: 'left',
  },
  buttonTextStyle: {
    color: textsMain(props),
    textAlign: 'left',
    fontSize: 14,
    marginLeft: 0,
  },
}))``;

export const Error = styled(Typography).attrs({ variant: 'subhead' })`
  color: ${getTheme('failure.main')};
  margin-top: ${getTheme('minimumSpacing')};
`;
