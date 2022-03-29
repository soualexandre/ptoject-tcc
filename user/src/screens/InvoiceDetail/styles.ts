import { StatusBar as CustomStatusBar } from 'react-native';
import styled from 'styled-components/native';
import { ScreenWrapper, Tag, Typography } from '~/components';
import { getTheme } from '~/utils';

const smallerSpacing = getTheme('smallerSpacing');
const normalSpacing = getTheme('normalSpacing');
const mediumSpacing = getTheme('mediumSpacing');

const primaryMain = getTheme('primary.main');

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: primaryMain(props),
}))``;

export const StatusBar = styled(CustomStatusBar).attrs((props) => ({
  backgroundColor: primaryMain(props),
}))``;

export const WrapperDetails = styled.View`
  margin: ${mediumSpacing} ${normalSpacing};
`;

export const ModalTag = styled(Tag)`
  width: 60px;
`;

export const ClientInfo = styled.View``;

export const Title = styled(Typography).attrs({
  variant: 'headline',
})`
  font-weight: bold;
  margin-top: ${mediumSpacing};
  margin-bottom: ${mediumSpacing};
`;

export const ClientDetails = styled.View`
  border-radius: ${getTheme('smallRadius')};
  margin-left: 2px;
`;

export const DetailsText = styled(Typography).attrs({
  variant: 'callout',
})`
  font-family: Roboto;
  padding-top: ${smallerSpacing};
  padding-bottom: ${smallerSpacing};
`;

export const GrayText = styled(Typography).attrs({
  variant: 'callout',
})`
  color: ${getTheme('texts.dark')};
  opacity: 0.3;
`;

export const StatusText = styled(Typography).attrs({
  variant: 'callout',
})`
  margin-top: ${smallerSpacing};
  margin-bottom: ${smallerSpacing};
  color: ${getTheme('texts.dark')};
  opacity: 0.3;
`;
export const InvoiceInfo = styled.View`
  margin-top: ${smallerSpacing};
  flex-direction: row;
`;

export const InvoiceID = styled.View``;

export const InvoiceDate = styled.View`
  padding-left: ${smallerSpacing}; ;
`;

export const ItensWrapper = styled.View``;

export const ItensHeader = styled.View`
  background: ${getTheme('secondary.contrast')};
  flex-direction: row;
  justify-content: space-between;
  padding: ${mediumSpacing} ${normalSpacing};
`;

export const ItensHeaderText = styled(Typography).attrs({
  variant: 'callout',
})`
  font-family: Roboto Light;
  font-weight: bold;
`;

export const ItensInfo = styled.View``;

export const ItensDetailsWrapperText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${smallerSpacing};
`;

export const ItensDetailsText = styled(Typography).attrs({
  variant: 'callout',
})`
  color: ${getTheme('text')};
`;

export const TotalWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const TotalInfo = styled(Typography).attrs({
  variant: 'callout',
})`
  padding: ${normalSpacing};
  color: ${getTheme('text')};
`;

export const TotalInfoAmount = styled(Typography).attrs({
  variant: 'callout',
})`
  padding: ${normalSpacing};
  color: ${getTheme('text')};

  font-weight: bold;
`;
export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: ${smallerSpacing} ${smallerSpacing};
  height: 50px;
  align-items: center;
`;
export const ButtonContest = styled.TouchableOpacity``;

export const ButtonContestText = styled(Typography).attrs({
  variant: 'headline',
})`
  color: ${getTheme('failure.main')};
  padding: ${smallerSpacing};
`;

export const ButtonSendEmail = styled.TouchableOpacity`
  background: ${getTheme('info.main')};
  border-radius: 5px;
  padding: ${smallerSpacing};
  width: 200px;
`;

export const ButtonSendEmailText = styled(Typography).attrs({
  variant: 'headline',
})`
  color: ${getTheme('primary.contrast')};
  text-align: center;
`;
export const HorizontalBar = styled.View`
  border: 1px solid;
  border-color: ${getTheme('gray')};
  width: 95%;
  align-self: center;
  margin: ${getTheme('minimumSpacing')};
`;
