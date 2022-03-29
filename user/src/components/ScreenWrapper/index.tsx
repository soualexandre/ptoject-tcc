import * as React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { NavigationActions } from '~/navigation';
import { goBack } from '~/navigation/actions';
import If from '../If';
import KeyboardAvoidingView from '../KeyboardAvoidingView';
import StatusBar from '../StatusBar';
import {
  MainHeaderDefault,
  MainSimpleHeader,
  OnboardHeader,
  Wrapper,
} from './styles';

const contentContainerStyle = {
  width: '100%',
  flexDirection: 'column',
  alignContent: 'center',
  alignSelf: 'center',
};

type SceneStyle = {
  [index: number]: {
    backgroundColor?: string;
  };
};

type Props = {
  title?: string;
  description?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  hasScroll?: boolean;
  keyboardShouldAvoid?: boolean;
  keyboarVerticalOffset?: number;
  style?: SceneStyle;
  isOnBoardingHeader?: boolean;
  isMainSimpleHeader?: boolean;
  isMainSimpleHome?: boolean;
  isArrowButton?: boolean;
  isCloseButton?: boolean;
  onBackButtonPress?(): void;
  onSearch?(value: string): void;
  colorStatusBar?: string;
  colorIcon?: string;
  colorTitle?: string;
  isMainHeader?: boolean;
  isFixed?: boolean;
  horizontal?: boolean;
  showAvatar?: boolean;
  showSearchInput?: boolean;
  bounces?: boolean;
  onPressFilter?(): void;
  showFilter?: boolean;
};

const ScreenWrapper: React.FC<Props> = ({
  children,
  isOnBoardingHeader = false,
  isMainSimpleHeader = false,
  isMainSimpleHome = false,
  isArrowButton = false,
  isCloseButton = false,
  onBackButtonPress,
  title = '',
  description = '',
  fullWidth = false,
  fullHeight = false,
  hasScroll = true,
  keyboardShouldAvoid = true,
  keyboarVerticalOffset = 0,
  style = [{}],
  colorStatusBar,
  colorIcon,
  colorTitle,
  isMainHeader = false,
  isFixed = false,
  showAvatar = false,
  showSearchInput = true,
  onSearch,
  bounces = true,
  onPressFilter = () => {},
  showFilter = false,
  ...props
}) => (
  <>
    <StatusBar colorStatusBar={colorStatusBar} />
    <KeyboardAvoidingView
      keyboarVerticalOffset={keyboarVerticalOffset}
      keyboardShouldAvoid={keyboardShouldAvoid}
    >
      <If condition={isMainHeader && isFixed}>
        <MainHeaderDefault
          title={title}
          description={description}
          showAvatar={showAvatar}
          onSearch={onSearch}
          showSearchInput={showSearchInput}
          onPressFilter={onPressFilter}
          showFilter={showFilter}
          onPressMenu={() =>
            NavigationActions.dispatch(DrawerActions.openDrawer())
          }
        />
      </If>
      <Wrapper
        scrollEnabled={hasScroll}
        fullHeight={fullHeight}
        fullWidth={fullWidth}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        contentContainerStyle={[contentContainerStyle, style]}
        bounces={bounces}
        {...props}
      >
        <If condition={isOnBoardingHeader}>
          <OnboardHeader
            title={title}
            onPress={onBackButtonPress || goBack}
            isArrowButton={isArrowButton}
            description={description}
            colorIcon={colorIcon}
            colorTitle={colorTitle}
          />
        </If>
        <If condition={isMainSimpleHeader}>
          <MainSimpleHeader
            title={title}
            onPress={onBackButtonPress || goBack}
            isCloseButton={isCloseButton}
          />
        </If>
        <If condition={isMainSimpleHome}>
          <MainSimpleHeader
            title={title}
            onPress={onBackButtonPress || goBack}
            isCloseButton={isCloseButton}
          />
        </If>
        <If condition={isMainHeader && !isFixed}>
          <MainHeaderDefault
            title={title}
            description={description}
            showAvatar={showAvatar}
            onPressFilter={onPressFilter}
            showFilter={showFilter}
            onPressMenu={() =>
              NavigationActions.dispatch(DrawerActions.openDrawer())
            }
          />
        </If>
        {children}
      </Wrapper>
    </KeyboardAvoidingView>
  </>
);

export default ScreenWrapper;
