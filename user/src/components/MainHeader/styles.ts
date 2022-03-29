import styled from 'styled-components/native';
import { getShadow, getTheme } from '~/utils';
import TouchableDefault from '../Touchable';
import Typography from '../Typography';

const sectionSpacing = getTheme('sectionSpacing');
const screenSpacing = getTheme('screenSpacing');
const textsContrast = getTheme('texts.contrast');
const smallSpacing = getTheme('smallSpacing');

type SearchProps = {
  showSearchInput: boolean;
};

export const Wrapper = styled.View<SearchProps>`
  background-color: ${textsContrast};
  padding-bottom: ${({ showSearchInput }) =>
    showSearchInput ? screenSpacing : 0};
`;

export const ChildrenWrapper = styled.View`
  background-color: ${getTheme('primary.main')};
  padding-horizontal: ${screenSpacing};
  padding-top: ${getTheme('statusBarSpacing')};
  padding-bottom: 26px;
`;

export const Title = styled(Typography).attrs({ variant: 'headline' })`
  font-weight: bold;
  font-family: 'Roboto-Regular';

  color: ${textsContrast};
`;

export const Description = styled(Typography).attrs({ variant: 'callout' })`
  color: ${textsContrast};
  margin-bottom: ${sectionSpacing};
`;

export const TouchableMenu = styled(TouchableDefault)`
  margin-bottom: ${smallSpacing};
  width: 60px;
  padding-vertical: ${getTheme('smallerSpacing')};
`;

export const TouchableFilter = styled(TouchableDefault)`
  margin-bottom: ${smallSpacing};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image.attrs({})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const ContainerTitle = styled.View`
  margin-bottom: ${sectionSpacing};
`;

export const SearchBox = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: -${smallSpacing};
  height: 50px;
  background-color: red;
  margin-horizontal: ${screenSpacing};
  padding-horizontal: ${smallSpacing};
  background-color: ${textsContrast};
  border-radius: ${getTheme('smallRadius')};
  ${getShadow()}
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: getTheme('placeholder')(props),
}))`
  font-family: Roboto-Medium;
  color: ${getTheme('texts.light')};
  height: 50px;
  margin-left: ${smallSpacing};
`;
