import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { moderateScale, scale } from '~/modules';
import colors from '../../theme/colors';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const defaultSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: scale(14),
    height: moderateScale(30),
    borderWidth: moderateScale(1),
    borderColor: 'transparent',
    color: colors.texts.light,
    fontFamily: 'Roboto',
  },
  inputAndroid: {
    fontSize: scale(14),
    height: moderateScale(30),
    borderWidth: moderateScale(1),
    borderColor: 'transparent',
    color: colors.texts.light,
    fontFamily: 'Roboto',
  },
  viewContainer: {
    justifyContent: 'center',
  },
  placeholder: {
    color: colors.texts.contrast,
  },
});
