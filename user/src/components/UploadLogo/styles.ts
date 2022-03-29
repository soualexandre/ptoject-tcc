import styled from 'styled-components/native';
import { getTheme } from '~/utils';
import Button from '../Button';
import Touchable from '../Touchable';
import Typography from '../Typography';

const grayOpacity = getTheme('borderOpacity');
const smallerSpacing = getTheme('smallerSpacing');

export const Wrapper = styled.View``;

export const WrapperUploadLogo = styled.View``;

export const Title = styled(Typography).attrs({ variant: 'callout' })``;

export const Container = styled(Touchable)`
  width: 100%;
  height: 110px;
  border: 1px;
  border-style: dashed;
  border-color: ${grayOpacity};
  justify-content: center;
  margin-vertical: ${getTheme('mediumSpacing')};
`;

export const ContainerIcon = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Text = styled(Typography)`
  color: ${grayOpacity};
  margin-top: ${getTheme('smallerSpacing')};
`;

export const ButtonCloseModal = styled(Button)``;

export const ButtonHandleGallery = styled(Button)`
  padding-horizontal: ${smallerSpacing};
  margin-right: ${smallerSpacing};
`;
export const ButtonHandleCamera = styled(Button)`
  padding-horizontal: ${smallerSpacing};
`;

export const WrapperModal = styled.View`
  padding-bottom: ${smallerSpacing};
  padding-horizontal: ${smallerSpacing};
  background-color: ${getTheme('primary.contrast')};
  border-radius: ${getTheme('minimumRadius')};
`;

export const RowButtonModal = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-vertical: ${smallerSpacing};
`;

export const ImageUrl = styled.Image`
  height: 100%;
  width: 100%;
`;
