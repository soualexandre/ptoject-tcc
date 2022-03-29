import { RouteProp } from '@react-navigation/native';
import { Routes } from '~/navigation';

export type PublicStackParams = {
  [Routes.LOGIN]: undefined;
  [Routes.RECOVER_PASSWORD]: undefined;
  [Routes.ONBOARDING_NEW_REGISTER]: undefined;
  [Routes.ONBOARDING_ADDRESS]: undefined;
  [Routes.ONBOARDING_INFO_ENTERPRISE]: undefined;
  [Routes.ONBOARDING_INFO_PERSON]: undefined;
};

export type PrivateStackParams = {
  [Routes.DRAWER]: undefined;
  [Routes.INVOICE]: undefined;
  [Routes.CARGO_REGISTER]: undefined;
  [Routes.PACK_INFO]: undefined;
  [Routes.POINT]: undefined;
  [Routes.FREIGHT_HISTORY]: undefined;
  [Routes.FREIGHT_DETAIL]: { id: number };
  [Routes.ESTIMAT_VEHICLE]: undefined;
  [Routes.ESTIMAT_SERVICE]: undefined;
  [Routes.ESTIMAT_PROPOSE_PRICE]: undefined;
  [Routes.PAYMENT]: undefined;
  [Routes.SERVICE_RECURRENCE]: undefined;
  [Routes.FREIGHT_CONCLUDE]: undefined;
  [Routes.FREIGHT_END]: undefined;
  [Routes.EDIT_PROFILE]: undefined;
  [Routes.EDIT_PROFILE_INFO]: undefined;
  [Routes.EDIT_PROFILE_ADDRESS]: undefined;
  [Routes.EDIT_PROFILE_PASSWORD]: undefined;
};

export type ModalsStackParams = {
  [Routes.FILTER]: { type: string };
  [Routes.INVOICE_DETAILS]: { id: number };
  [Routes.COLLECT_POINT]: undefined;
};

export type FilterModalScreenParams = RouteProp<
  ModalsStackParams,
  Routes.FILTER
>;

export type FreightDetailsParams = RouteProp<
  PrivateStackParams,
  Routes.FREIGHT_DETAIL
>;
