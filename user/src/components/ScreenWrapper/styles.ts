import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { getBottomSpace, ifIphoneX } from '~/modules';
import { getTheme } from '~/utils';
import MainHeader from '../MainHeader';
import MainSimpleHeaderDefault from '../MainSimpleHeader';
import OnBoardingHeader from '../OnBoardHeader';

type Props = {
  contentContainerStyle: StyleProp<ViewStyle>;
  fullWidth: boolean;
  fullHeight: boolean;
};

const primaryContrast = getTheme('primary.contrast');

const bottomSpace = ifIphoneX(getBottomSpace(), 20);

export const Wrapper = styled(ScrollView)<Props>`
  width: 100%;
  background-color: ${primaryContrast};
  padding-bottom: ${({ fullHeight }) => (fullHeight ? 0 : bottomSpace)}px;
  padding-horizontal: ${({ fullWidth }) =>
    fullWidth ? 0 : getTheme('screenSpacing')};
`;

export const MainSimpleHeader = styled(MainSimpleHeaderDefault)``;

export const OnboardHeader = styled(OnBoardingHeader)``;

export const MainHeaderDefault = styled(MainHeader)``;
