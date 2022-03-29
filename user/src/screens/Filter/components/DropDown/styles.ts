import styled from 'styled-components/native';
import { Typography } from '~/components';
import { SelectDropdown } from '~/modules';
import { getTheme } from '~/utils';

const textsMain = getTheme('texts.main');
const primaryMainContrast = getTheme('primary.contrast');
const secondaryMain = getTheme('secondary.main');

export const Wrapper = styled.View`
  border-bottom-width: 1px;
`;

export const Title = styled(Typography).attrs({ variant: 'subhead' })`
  color: ${primaryMainContrast};
`;

export const Select = styled(SelectDropdown).attrs((props) => ({
  buttonStyle: {
    width: '100%',
    marginBottom: 2,
    backgroundColor: secondaryMain(props),
  },
  rowTextStyle: {
    color: textsMain(props),
    textAlign: 'left',
  },
  buttonTextStyle: {
    color: primaryMainContrast(props),
    textAlign: 'left',
    fontSize: 14,
    marginLeft: 0,
  },
}))``;
