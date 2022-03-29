import styled from 'styled-components/native';
import { Button, ScreenWrapper, Typography } from '~/components';
import { getTheme } from '~/utils';

const sectionLargeSpacing = getTheme('sectionLargeSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const smallerSpacing = getTheme('smallerSpacing');

export const Heading = styled(Typography)`
  font-weight: bold;
`;

export const InfoUsuario = styled.View`
  margin-top: ${getTheme('moderateSpacing')};
`;

export const Title = styled(Typography)`
  font-weight: bold;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getTheme('moderateSpacing')};
`;

export const RowAddress = styled.View`
  margin-top: ${getTheme('moderateSpacing')};
`;

export const RowBodywork = styled.View`
  margin-top: ${getTheme('moderateSpacing')};
`;

export const Name = styled(Typography).attrs({ variant: 'subhead' })`
  font-family: Roboto Light;
  opacity: 0.6;
`;

export const Value = styled(Typography).attrs({ variant: 'callout' })`
  font-family: Roboto Light;
`;

export const InfoCargo = styled.View`
  margin-top: ${getTheme('sectionSpacing')};
`;
export const SourceAddress = styled.View`
  margin-top: ${sectionLargeSpacing};
`;
export const DestinationAddress = styled.View`
  margin-top: ${sectionLargeSpacing};
`;
export const VehicleIdentification = styled.View`
  margin-top: ${sectionLargeSpacing};
`;
export const ServiceRecurrence = styled.View`
  margin-top: ${sectionLargeSpacing};
`;
export const ProposePrice = styled.View`
  margin-top: ${sectionLargeSpacing};
`;

export const Container = styled.View`
  margin-horizontal: ${getTheme('screenSpacing')};
  margin-bottom: ${getTheme('bottomSpacing')};
`;

export const Next = styled(Button)`
  margin-bottom: ${mediumSpacing};
  margin-horizontal: ${mediumSpacing};
  margin-top: ${sectionLargeSpacing};
`;
export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.main')(props),
}))``;

export const OtherServicesWrapper = styled.View`
  margin-top: ${smallerSpacing};
`;

export const Services = styled(Typography).attrs({ variant: 'callout' })`
  font-family: Roboto Light;
`;

export const OtherServiceLabel = styled.View`
  flex-direction: row;
`;

export const DeliverySeparator = styled.View`
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
  margin-top: 20px;
`;
