import styled from 'styled-components/native';
import {
  Button,
  DropDown,
  ScreenWrapper,
  Typography,
  UploadLogo,
} from '~/components';
import { getTheme } from '~/utils';

const mediumSpacing = getTheme('mediumSpacing');
const minimumSpacing = getTheme('minimumSpacing');

export const Category = styled(DropDown)``;

export const Container = styled.View`
  margin-horizontal: ${getTheme('screenSpacing')};
  margin-top: ${getTheme('moderateSpacing')};
  flex: 1;
  justify-content: space-between;
`;

export const Product = styled(DropDown)`
  margin-top: ${minimumSpacing};
`;

export const Title = styled(Typography).attrs({ variant: 'headline' })`
  margin-top: ${mediumSpacing};
  font-weight: bold;
`;
export const SubTitle = styled(Typography).attrs({ variant: 'callout' })`
  margin-top: ${getTheme('smallerSpacing')};
  font-family: Roboto Light;
`;
export const Information = styled(Typography).attrs({ variant: 'callout' })`
  font-family: 'Roboto-Thin';
  margin-bottom: ${mediumSpacing};
`;

export const UploadImageCharge = styled(UploadLogo)`
  margin-top: ${mediumSpacing};
`;

export const UploadDocumentCharge = styled(UploadLogo)`
  margin-top: ${mediumSpacing};
`;

export const Next = styled(Button)`
  margin-top: ${getTheme('sectionLargeSpacing')};
`;

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.main')(props),
}))`
  flex: 1;
`;
