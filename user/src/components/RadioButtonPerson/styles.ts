import {
  RadioButton as _RadioButton,
  RadioButtonInput as _RadioButtonInput,
  RadioButtonLabel as _RadioButtonLabel,
} from 'react-native-simple-radio-button';
import styled from 'styled-components/native';
import { getTheme } from '~/utils';

const primaryMain = getTheme('primary.main');

export const RadioButton = styled(_RadioButton)``;

type Props = {
  selectedIndex: boolean;
};
export const RadioButtonInput = styled(_RadioButtonInput).attrs(
  (props: Props) => ({
    buttonSize: 12,
    buttonOuterSize: 24,
    buttonInnerColor: primaryMain(props),
    borderWidth: 2,
    buttonOuterColor: props.selectedIndex ? primaryMain(props) : '#000',
  }),
)<Props>``;

export const RadioButtonLabel = styled(_RadioButtonLabel).attrs({
  labelWrapStyle: { marginRight: 28 },
})``;
