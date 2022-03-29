import styled from 'styled-components/native';
import { getTheme } from '~/utils';
import TextInput from '../TextInput';
import Typography from '../Typography';

const smallSpacing = getTheme('smallSpacing');

export const Wrapper = styled.View``;

export const Error = styled(Typography).attrs({ variant: 'subhead' })`
  color: ${getTheme('failure.main')};
  margin-top: -${getTheme('minimumSpacing')};
`;

export const Input = styled(TextInput)`
  margin-bottom: ${smallSpacing};
  margin-top: ${smallSpacing};
`;
