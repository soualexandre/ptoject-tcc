import {
  CommonActions,
  NavigationAction,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import { Storage } from '~/services';
import { Routes, Stacks } from './routes';

type RouteParams = Record<string, any>;

let navigator: NavigationContainerRef;

export function setTopLevelNavigator(
  navigatorRef: NavigationContainerRef,
): void {
  navigator = navigatorRef;
}

export function dispatch(fn: NavigationAction): void {
  navigator.dispatch(fn);
}

export function reset(routeScreen: {
  screen: Routes;
  params?: Record<string, any>;
}): void {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeScreen.screen,
          params: routeScreen.params,
        },
      ],
    }),
  );
}

export function resetRouteToTop(
  routeName: string,
  params?: Record<string, any>,
): void {
  navigator.resetRoot({
    index: 0,
    routes: [
      {
        name: routeName,
        params,
      },
    ],
  });
}

export function navigate(routeName: string, params?: RouteParams): void {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}

export function goBack(): void {
  navigator.dispatch(CommonActions.goBack());
}

export function logout(): void {
  Storage.removeToken();
  resetRouteToTop(Stacks.PUBLIC);
}

export function replace(name: string, params?: RouteParams): void {
  navigator.dispatch(StackActions.replace(name, params));
}
