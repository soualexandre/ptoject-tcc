import styled from 'styled-components/native';
import { scale } from '~/modules';
import { getTheme } from '~/utils';
import Button from '../Button';
import Typography from '../Typography';

const smallerSpacing = getTheme('smallerSpacing');
const minimumSpacing = getTheme('minimumSpacing');
const normalSpacing = getTheme('normalSpacing');
const largeSpacing = getTheme('largeSpacing');
const mediumSpacing = getTheme('mediumSpacing');

export const UnratedWrapper = styled.View`
  margin-top: ${largeSpacing};
`;

export const Title = styled(Typography).attrs({ variant: 'headline' })`
  font-weight: bold;
`;

export const Description = styled.Text`
  margin-top: ${minimumSpacing};
  margin-bottom: ${mediumSpacing};
`;
export const RatingButton = styled(Button)`
  margin-bottom: ${smallerSpacing};
`;

export const RatedWrapper = styled.View`
  margin-top: ${largeSpacing};
  align-items: center;
  margin-bottom: ${largeSpacing};
`;

export const RatedTitle = styled(Typography).attrs({ variant: 'headline' })`
  font-weight: bold;
  margin-bottom: ${mediumSpacing};
`;

export const RatingComment = styled(Typography).attrs({ variant: 'callout' })`
  color: ${getTheme('gray')};
  text-align: center;
  margin-top: ${mediumSpacing};
`;

export const Decline = styled(Button)`
  width: ${scale(135)}px;
  height: ${scale(40)}px;
  border-radius: ${minimumSpacing};
  background-color: ${getTheme('failure.light')};
`;

export const DeclineCard = styled(Button)`
  width: ${scale(135)}px;
  height: ${scale(40)}px;
  border-radius: ${minimumSpacing};
  color: ${getTheme('failure.light')};
  background-color: ${getTheme('primary.contrast')};
`;

export const Text = styled(Typography).attrs({ variant: 'callout' })`
  color: ${getTheme('texts.main')};
  text-align: center;
`;

export const TextDecline = styled(Typography).attrs({ variant: 'callout' })`
  color: ${getTheme('failure.light')};
`;

export const Accept = styled(Button)`
  width: ${scale(135)}px;
  height: ${scale(40)}px;
  border-radius: ${minimumSpacing};
  background-color: ${getTheme('primary.light')};
`;

export const WrapperModal = styled.View`
  padding-top: ${normalSpacing};
  padding-bottom: ${smallerSpacing};
  padding-horizontal: ${smallerSpacing};
  background-color: ${getTheme('primary.contrast')};
  border-radius: ${getTheme('minimumRadius')};
`;

export const RowButtonModal = styled.View`
  padding-top: ${smallerSpacing};
  flex-direction: row;
  justify-content: space-around;
  margin-vertical: ${smallerSpacing};
`;
