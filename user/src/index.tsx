import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainerRef } from '@react-navigation/core';
import { ToastMessage } from '~/modules';
import { Navigation, NavigationActions } from './navigation';
import store from './stores';
import { colors, theme } from './theme';
import '~/utils/config/reactotron';

ToastMessage.setColorTheme({
  success: colors.success.main,
  info: colors.info.main,
  warning: colors.warning.main,
  danger: colors.failure.main,
});

export default class App extends Component {
  render(): JSX.Element {
    return (
      <Provider rootStore={store}>
        <ThemeProvider theme={theme}>
          <Navigation
            setNavigationTop={(navigatorRef: NavigationContainerRef): void =>
              NavigationActions.setTopLevelNavigator(navigatorRef)
            }
          />
          <ToastMessage position="top" />
        </ThemeProvider>
      </Provider>
    );
  }
}
