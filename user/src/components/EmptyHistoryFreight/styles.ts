import styled from 'styled-components/native';
import { getTheme } from '~/utils';
import Typography from '../Typography';

const smallSpacing = getTheme('smallSpacing');

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${smallSpacing};
  padding-top: ${smallSpacing};
`;

export const Title = styled(Typography).attrs({
  variant: 'title2',
})`
  font-family: Roboto;
  font-weight: bold;
  margin-top: ${getTheme('moderateSpacing')};
  text-align: center;
  color: ${getTheme('primary.main')};
`;
