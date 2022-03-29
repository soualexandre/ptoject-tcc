import { Rating } from 'react-native-ratings';
import styled from 'styled-components/native';
import { scale } from '~/modules';
import { getTheme } from '~/utils';
import Button from '../Button';

import TagDefault from '../Tag';
import Typography from '../Typography';

const screenSpacing = getTheme('screenSpacing');
const smallRadius = getTheme('smallRadius');
const smallerSpacing = getTheme('smallerSpacing');
const minimumSpacing = getTheme('minimumSpacing');
const normalSpacing = getTheme('normalSpacing');

export const ContainerProvider = styled.View`
  width: 100%;
  background-color: ${getTheme('primary.contrast')};
  border-radius: ${smallerSpacing};
  padding: ${screenSpacing};
  shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-color: grey;
  shadow-offset: 0px 0px;
  elevation: 1;
  border-width: 1px;
  border-color: transparent;
`;
export const RatingStar = styled(Rating)`
  padding-top: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const RowBody = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: 100px;
  padding-bottom: ${normalSpacing};
`;

type ColumnProps = {
  flex?: number;
};

export const Column = styled.View<ColumnProps>`
  flex: ${({ flex }) => flex || 1};
`;
export const ColumnHeading = styled.View<ColumnProps>`
  margin-left: ${getTheme('normalSpacing')};
  flex: ${({ flex }) => flex || 1};
`;
export const ColumnDistance = styled.View<ColumnProps>`
  margin-left: ${getTheme('smallerSpacing')};
  margin-bottom: ${getTheme('normalSpacing')};
  flex: ${({ flex }) => flex || 1};
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
  color: ${getTheme('failure.light')}
  background-color: ${getTheme('primary.contrast')};
`;

export const Text = styled(Typography).attrs({ variant: 'callout' })`
  color: ${getTheme('texts.main')};
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
export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: ${smallerSpacing} ${smallerSpacing};
  height: 50px;
  align-items: center;
`;

export const Tag = styled(TagDefault)`
  margin-top: ${getTheme('screenSpacing')};
  margin-bottom: ${getTheme('smallerSpacing')};
`;

export const Title = styled(Typography).attrs({ variant: 'headline' })`
  font-weight: normal;
  margin-bottom: ${smallRadius};
  margin-top: ${screenSpacing};
`;

export const Heading = styled(Typography).attrs({ variant: 'callout' })`
  color: ${getTheme('texts.dark')};
  opacity: 0.3;
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

export const Image = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;
