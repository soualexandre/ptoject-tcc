import React, { useContext, useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { ThemeContext } from 'styled-components';
import {
  NavigationContainer,
  NavigationContainerRef,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { If } from '~/components';
import { Storage } from '~/services';
import * as NavigationActions from './actions';
import { Routes, Stacks } from './routes';
import { ModalStack, PrivateStack, PublicStack } from './stacks';

const MainStack = createStackNavigator();

type Props = {
  setNavigationTop?: (navigatorRef: NavigationContainerRef) => void;
};

export const Navigation: React.FC<Props> = ({ setNavigationTop }) => {
  const { primary, tertiary } = useContext(ThemeContext);
  const [token, setToken] = useState<string | null>();
  const [showLoading, setShowLoading] = useState(true);

  const getTokenUser = async () => {
    const userToken = await Storage.getToken();
    setToken(userToken);
    setShowLoading(false);
  };

  useEffect(() => {
    getTokenUser();
  }, []);

  const contextTheme = {
    dark: false,
    colors: {
      primary: primary.main,
      background: 'transparent',
      card: tertiary.contrast,
      text: primary.contrast,
      border: tertiary.contrast,
      notification: primary.main,
    },
  };

  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide()}
      ref={setNavigationTop}
      theme={contextTheme}
    >
      <If condition={!showLoading}>
        <MainStack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={token ? Stacks.PRIVATE : Stacks.PUBLIC}
        >
          <MainStack.Screen name={Stacks.PUBLIC} component={PublicStack} />
          <MainStack.Screen name={Stacks.PRIVATE} component={PrivateStack} />
          <MainStack.Screen name={Stacks.MODAL} component={ModalStack} />
        </MainStack.Navigator>
      </If>
    </NavigationContainer>
  );
};

export {
  Stacks,
  Routes,
  NavigationActions,
  useNavigation,
  useRoute,
  useFocusEffect,
};
