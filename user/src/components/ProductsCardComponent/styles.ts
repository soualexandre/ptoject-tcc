import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { getTheme } from '~/utils';
import Button from '../Button';
import Typography from '../Typography';

const smallSpacing = getTheme('smallSpacing');
const smallerSpacing = getTheme('smallerSpacing');

export const Wrapper = styled.View`
  background-color: ${getTheme('primary.contrast')};
  border-radius: ${getTheme('smallRadius')};
  shadow-color: ${getTheme('secondary.shadow')};
  justify-content: center;
  align-items: center;
  margin: 14px;
  padding-horizontal: 15px;
  height: 40px
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: ${getTheme('smallRadius')};
  elevation: 3;
`;
export const MiniCard = styled.View``;
export const FilterHorizontal = styled(ScrollView)`
  flex: 1;
  flex-direction: row;
`;

export const Image = styled(ScrollView)`
  flex: 1;
  width: 100px;
  height: 20px;
  flex-direction: column;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-vertical: ${smallerSpacing};
`;
