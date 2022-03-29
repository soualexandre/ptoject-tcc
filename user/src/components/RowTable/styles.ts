import styled from 'styled-components/native';
import { getTheme } from '~/utils';
import TagDefault from '../Tag';
import Typography from '../Typography';

const mediumSpacing = getTheme('mediumSpacing');

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${mediumSpacing};
  margin-horizontal: ${mediumSpacing};
`;

export const Left = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

export const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`;

export const Text = styled(Typography).attrs({
  variant: 'callout',
})`
  color: ${getTheme('text')};
  text-align: center;
`;

export const Tag = styled(TagDefault)``;
