import axios, { AxiosError, AxiosResponse } from 'axios';
import { isEmpty } from '~/modules';
import { Storage } from '~/services';
import { WBASE_URL } from '~/whitelabel';
import handleApiError from './interceptor/handleApiError';

const baseURL: string = WBASE_URL;

const successResponse = (response: AxiosResponse): AxiosResponse => response;

const api = axios.create({
  baseURL,
  timeout: 20000, // 20 seconds timeout
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const token: string | null = await Storage.getToken();

  if (isEmpty(token)) {
    return config;
  }

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

api.interceptors.response.use(successResponse, (error: AxiosError) =>
  handleApiError(error),
);

export default api;
