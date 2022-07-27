import { Button, FlatList, Image, Text, View } from 'react-native';
import styled from 'styled-components/native';

import { ScreenWrapper, Typography } from '~/components';

import { getTheme } from '~/utils';

const smallerSpacing = getTheme('smallSpacing');
const primaryMain = getTheme('primary.main');
const mediumSpacing = getTheme('smallSpacing');

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: getTheme('primary.contrast')(props),
}))`
  flex: 1;
`;

export const Separator = styled.View``;
export const ButtonAgend = styled.TouchableOpacity`
  background-color: ${primaryMain};
  border-radius: ${getTheme('smallRadius')};
  margin: ${mediumSpacing};
`;
export const Conatiner = styled(View)`
  justify-content: center;
  align-items: center;
`;
export const Title = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
`;
export const LabelAgend = styled(Text)`
  font-weight: bold;
  font-size: 12px;
  margin-top: 10px;
  color: ${getTheme('primary.contrast')};
  text-align: center;
  margin-bottom: 12px;
`;
export const SectionTitle = styled(Text)`
  font-size: 12px;
  padding-horizontal: ${getTheme('screenSpacing')};
  padding-vertical: ${getTheme('screenSpacing')};
`;
export const BannerCompany = styled(Image)`
  width: 130px;
  height: 130px;
  border-radius: 999px;
`;

export const FreightListBase = styled(FlatList as new () => FlatList).attrs({
  contentContainerStyle: { padding: 0 },
})`
  width: 100%;
`;
