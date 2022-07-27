import { AxiosError } from 'axios';
import { FIELDS_SETTINGS, ResponseError } from '~/utils';
import request from '../request';

const fieldsSettings = [
  FIELDS_SETTINGS.SPLASH_SETTINGS,
  FIELDS_SETTINGS.CREATE_REQUEST_SETTINGS,
];

export const recoverPassword = async (email: string): Promise<void> => {
  try {
    const { data } = await request.post(
      `/api/v2/corp/password/request?username=${email}`,
    );
    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const registerIndividual = async (userAuth: FormData): Promise<void> => {
  console.log('SUPER TESTE -----------', userAuth);
  try {
    await request.post('/api/auth/register', userAuth);
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const registerBusiness = async (
  userAuthBusiness: FormData,
): Promise<void> => {
  try {
    await request.post('/api/v2/corp/signup/business', userAuthBusiness);
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const getTotalsDashboard = async (): Promise<TotalDashboard> => {
  try {
    const { data } = await request.get('/api/getCompanies');
    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const settings = async ({
  fields = fieldsSettings,
}: {
  fields?: FIELDS_SETTINGS[];
}): Promise<Settings> => {
  try {
    const { data } = await request.post('/api/v2/settings/app_institution', {
      fields,
    });
    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const geolocation = async (
  address: string,
): Promise<AddressFromGeolocation[]> => {
  try {
    const { data } = await request.post(
      '/api/v2/corp/geolocation/get_lat_long_from_address',
      { address },
    );
    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const getUserProfile = async (): Promise<UserProfile> => {
  try {
    const { data } = await request.get('/api/v2/corp/profile');

    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const profileInfoUpdate = async (
  userProfile: FormData,
): Promise<UserUpdatedFromApi> => {
  try {
    const { data } = await request.post(
      '/api/v2/corp/update_profile',
      userProfile,
    );

    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const changeUserPassword = async (
  userData: ChangePasswordProps,
): Promise<void> => {
  try {
    await request.post('/api/v2/corp/password/change_logged', userData);
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};
