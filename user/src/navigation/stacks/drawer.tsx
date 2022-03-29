import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { IconCar, IconDashBoard, IconLogout, IconVector } from '~/assets';
import { DrawerProfile } from '~/components';
import { strings } from '~/locale';
import { NavigationActions } from '~/navigation';
import { FreightHistoryScreen, HomeScreen, NewRequestFreight } from '~/screens';
import { colors } from '~/theme';
import { getWidthDrawer, useAlerts, useStores } from '~/utils';
import { Routes } from '../routes';
import { DrawerTextLogout, NameDrawer } from './styles';

const Drawer = createDrawerNavigator();

export default (): JSX.Element => {
  const { user, freight } = useStores();
  const { showError } = useAlerts();

  const logout = async (): Promise<void> => {
    try {
      await user.logout();
      freight.clearFreights();
    } catch ({ message }) {
      showError(message);
    }
  };

  const navigate = (route: string, paramsRoute?: any): void => {
    NavigationActions.dispatch(DrawerActions.closeDrawer());
    NavigationActions.navigate(route, paramsRoute);
  };

  const navigateToProfile = () => {
    navigate(Routes.EDIT_PROFILE);
  };

  const CustomDrawerComponent = (props: any): JSX.Element => (
    <DrawerContentScrollView {...props}>
      <DrawerProfile
        fullName={user.userProfile.user.name}
        onPress={navigateToProfile}
      />
      <DrawerItemList {...props} />
      <DrawerItem
        label={() => (
          <DrawerTextLogout>{strings('drawer.logout')}</DrawerTextLogout>
        )}
        icon={() => <IconLogout />}
        onPress={logout}
      />
    </DrawerContentScrollView>
  );

  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: colors.primary.main,
        width: getWidthDrawer(),
      }}
      initialRouteName={Routes.HOME}
      drawerContent={(props) => <CustomDrawerComponent {...props} />}
    >
      <Drawer.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{
          drawerLabel: () => (
            <NameDrawer>{strings('drawer.dashboard')}</NameDrawer>
          ),
          drawerIcon: () => <IconDashBoard />,
        }}
      />
      <Drawer.Screen
        name={Routes.NEW_REQUEST_FREIGHT}
        component={NewRequestFreight}
        options={{
          drawerLabel: () => (
            <NameDrawer>{strings('drawer.freightRequest')}</NameDrawer>
          ),
          drawerIcon: () => <IconCar />,
        }}
      />
      <Drawer.Screen
        name={Routes.FREIGHT_HISTORY}
        component={FreightHistoryScreen}
        options={{
          drawerLabel: () => (
            <NameDrawer>{strings('drawer.followup')}</NameDrawer>
          ),
          drawerIcon: () => <IconVector />,
        }}
      />
    </Drawer.Navigator>
  );
};
