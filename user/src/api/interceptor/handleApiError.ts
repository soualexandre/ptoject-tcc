// @ts-nocheck
import { NavigationActions, Stacks } from '~/navigation';
import { Storage } from '~/services';

type ResponseError = ExpiredSessionError | AxiosError;

export default function handleApiError(error: AxiosError): ResponseError {
  if (error?.response?.status === 401) {
    Storage.clearWholeStorage();
    NavigationActions.resetRouteToTop(Stacks.PUBLIC);

    throw error;
  }
  throw error;
}
