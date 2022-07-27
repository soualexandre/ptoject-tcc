import React from 'react';
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  CargoRegister,
  CollectPoint,
  CompanyDetailScreen,
  EditProfileAddressScreen,
  EditProfileInfoScreen,
  EditProfilePasswordScreen,
  EditProfileScreen,
  EstimateProposePrice,
  EstimateService,
  EstimateVehicle,
  Filter,
  FreightConclude,
  FreightDetailScreen,
  FreightEnd,
  FreightHistoryScreen,
  InvoiceDetail,
  InvoiceScreen,
  LoginScreen,
  OnboardInfoPersonScreen,
  OnboardingAddressScreen,
  OnboardingNewRegisterScreen,
  OnboaringdInfoEnterpriseScreen,
  PackageInfo,
  Payment,
  Point,
  RecoverPasswordScreen,
  ShowCartItmems,
} from '~/screens';
import {
  ModalsStackParams,
  PrivateStackParams,
  PublicStackParams,
} from '~/utils/types';
import { Routes } from '../routes';
import Drawer from './drawer';

const Public = createStackNavigator<PublicStackParams>();
const Private = createStackNavigator<PrivateStackParams>();
const Modals = createStackNavigator<ModalsStackParams>();

export const PublicStack = (): JSX.Element => (
  <Public.Navigator
    initialRouteName={Routes.LOGIN}
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Public.Screen name={Routes.LOGIN} component={LoginScreen} />
    <Public.Screen
      name={Routes.ONBOARDING_NEW_REGISTER}
      component={OnboardingNewRegisterScreen}
    />
    <Public.Screen
      name={Routes.ONBOARDING_ADDRESS}
      component={OnboardingAddressScreen}
    />
    <Public.Screen
      name={Routes.ONBOARDING_INFO_ENTERPRISE}
      component={OnboaringdInfoEnterpriseScreen}
    />
    <Public.Screen
      name={Routes.ONBOARDING_INFO_PERSON}
      component={OnboardInfoPersonScreen}
    />
    <Public.Screen
      name={Routes.RECOVER_PASSWORD}
      component={RecoverPasswordScreen}
    />
  </Public.Navigator>
);

export const PrivateStack = (): JSX.Element => (
  <Private.Navigator
    initialRouteName={Routes.DRAWER}
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Private.Screen name={Routes.DRAWER} component={Drawer} />
    <Private.Screen name={Routes.INVOICE} component={InvoiceScreen} />
    <Private.Screen name={Routes.CARGO_REGISTER} component={CargoRegister} />
    <Private.Screen name={Routes.PACK_INFO} component={PackageInfo} />
    <Private.Screen name={Routes.POINT} component={Point} />
    <Private.Screen
      name={Routes.FREIGHT_HISTORY}
      component={FreightHistoryScreen}
    />
    <Private.Screen name={Routes.ESTIMAT_VEHICLE} component={EstimateVehicle} />
    <Private.Screen name={Routes.ESTIMAT_SERVICE} component={EstimateService} />
    <Private.Screen
      name={Routes.ESTIMAT_PROPOSE_PRICE}
      component={EstimateProposePrice}
    />
    <Private.Screen name={Routes.PAYMENT} component={Payment} />
    <Private.Screen
      name={Routes.FREIGHT_CONCLUDE}
      component={FreightConclude}
    />
    <Private.Screen name={Routes.FREIGHT_END} component={FreightEnd} />
    <Private.Screen
      name={Routes.FREIGHT_DETAIL}
      component={FreightDetailScreen}
    />
    <Private.Screen
      name={Routes.COMPANY_DETAIL}
      component={CompanyDetailScreen}
    />

    <Private.Screen name={Routes.SHOW_CART_ITEMS} component={ShowCartItmems} />

    <Private.Screen name={Routes.EDIT_PROFILE} component={EditProfileScreen} />
    <Private.Screen
      name={Routes.EDIT_PROFILE_INFO}
      component={EditProfileInfoScreen}
    />
    <Private.Screen
      name={Routes.EDIT_PROFILE_ADDRESS}
      component={EditProfileAddressScreen}
    />
    <Private.Screen
      name={Routes.EDIT_PROFILE_PASSWORD}
      component={EditProfilePasswordScreen}
    />
  </Private.Navigator>
);

export const ModalStack = (): JSX.Element => (
  <Modals.Navigator headerMode="none" mode="modal">
    <Modals.Screen name={Routes.COLLECT_POINT} component={CollectPoint} />
    <Modals.Screen name={Routes.FILTER} component={Filter} />
    <Modals.Screen name={Routes.INVOICE_DETAILS} component={InvoiceDetail} />
  </Modals.Navigator>
);
