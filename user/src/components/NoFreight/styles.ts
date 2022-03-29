import styled from 'styled-components/native';
import { getTheme } from '~/utils';
import Button from '../Button';
import Typography from '../Typography';

const smallSpacing = getTheme('smallSpacing');

export const NoDataWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${smallSpacing};
  padding-top: ${smallSpacing};
`;

export const NoDataTitle = styled(Typography).attrs({
  variant: 'title2',
})`
  font-family: Roboto;
  font-weight: bold;
  margin-top: ${getTheme('moderateSpacing')};
  text-align: center;
  color: ${getTheme('primary.main')};
`;

export const NoDataText = styled(Typography).attrs({
  variant: 'subhead',
})`
  margin-top: ${smallSpacing};
  text-align: center;
  color: ${getTheme('gray')};
`;

export const NewFreight = styled(Button)`
  width: 100%;
`;
