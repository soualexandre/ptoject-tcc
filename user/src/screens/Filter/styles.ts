import styled from 'styled-components/native';

import {
  Calendar as CustomCalendar,
  ScreenWrapper,
  Typography,
} from '~/components';
import { RangeSlider } from '~/modules';
import { getTheme } from '~/utils';
import DropDown from './components/DropDown';

const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const secondaryMain = getTheme('secondary.main');

const smallerSpacing = getTheme('smallerSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const screenSpacing = getTheme('screenSpacing');
const infoContrast = getTheme('info.contrast');

export const Input = styled.TextInput`
  color: ${infoContrast};
  padding-left: ${smallerSpacing};
  padding-vertical: 10px;
`;

export const WrapperInput = styled.View`
  border-bottom-color: ${primaryMain};
  border-bottom-width: 1px;
  padding-top: ${mediumSpacing};
`;
export const Text = styled(Typography).attrs({
  variant: 'subhead',
})`
  letter-spacing: 0.4px;
  color: ${infoContrast};
`;
export const Title = styled(Typography).attrs({ variant: 'subhead' })`
  margin-top: ${smallerSpacing};
  color: ${primaryContrast};
  padding-bottom: ${smallerSpacing};
`;

export const TextRange = styled(Typography).attrs({
  variant: 'subhead',
})`
  text-align: right;
  letter-spacing: 0.4px;
  color: ${infoContrast};
`;
type ColumnProps = {
  flex?: number;
};

export const Column = styled.View<ColumnProps>`
  align-items: flex-start;
  justify-content: center;
  flex: ${({ flex }) => flex || 1};
  border-bottom-color: ${primaryMain};
  border-bottom-width: 1px;
`;
export const ColumnPrimary = styled.View<ColumnProps>`
  align-items: flex-start;
  justify-content: center;
  border-bottom-color: ${primaryMain};
  border-bottom-width: 1px;
  margin-right: ${mediumSpacing}
  flex: ${({ flex }) => flex || 1};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${primaryMain};
  border-radius: ${getTheme('smallRadius')};
  margin: ${mediumSpacing};
`;

export const ButtonText = styled(Typography).attrs({
  variant: 'headline',
})`
  align-items: center;
  text-align: center;
  color: ${primaryContrast};
  padding: ${smallerSpacing};
`;

export const Calendar = styled(CustomCalendar)``;

export const SelectStatus = styled(DropDown)`
  color: ${primaryContrast};
`;
export const SelectTransaction = styled(DropDown)``;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${smallerSpacing};
`;

export const Money = styled(Typography).attrs({
  variant: 'subhead',
})`
  color: ${primaryContrast};
`;

export const Wrapper = styled(ScreenWrapper).attrs((props) => ({
  colorStatusBar: primaryMain(props),
  colorIcon: primaryContrast(props),
  colorTitle: primaryContrast(props),
}))`
  background-color: ${secondaryMain};
  padding: ${getTheme('screenSpacing')};
`;

export const SliderRange = styled(RangeSlider)`
  padding-bottom: ${screenSpacing};
`;
