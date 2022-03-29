import { AxiosError } from 'axios';
import { ResponseError } from '~/utils';

import request from '../request';

export const loginEmail = async ({
  email,
  password,
}: AuthLoginEmail): Promise<LoginEmailResponse> => {
  try {
    const params = {
      username: email,
      password,
    };
    const { data } = await request.post('/api/auth/login', params);
    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const logout = async (): Promise<void> => {
  try {
    const { data } = await request.get('/api/auth/logout');
    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};
