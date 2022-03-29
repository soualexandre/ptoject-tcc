import { AxiosError } from 'axios';
import { FILTER_STATUS, FREIGHT_PAGINATOR, ResponseError } from '~/utils';
import request from '../request';

export const getFreightsHistory = async (): Promise<Freight[]> => {
  try {
    const { data } = await request.get('/api/v2/corp/history');

    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const getSearchHistory = async (id: string): Promise<Freight> => {
  try {
    const { data } = await request.post('/api/v2/corp/history/search', {
      request_id: id,
    });

    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const getHistoryDetail = async (id: number): Promise<FreightDetails> => {
  try {
    const { data } = await request.post('/api/v2/corp/request/details', {
      request_id: id,
    });

    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const getChooseDriver = async (id: number): Promise<ChooseDrivers[]> => {
  try {
    const { data } = await request.post(
      '/api/v2/corp/request/providers_accepted',
      {
        request_id: id,
        current_page: FREIGHT_PAGINATOR.CURRENT_PAGE,
        itens_per_page: FREIGHT_PAGINATOR.ITENS_PER_PAGE,
      },
    );
    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};
export const acceptDeclineDriver = async (
  confirm: number,
  request_id: number,
  provider_id: number,
): Promise<ChooseDrivers[]> => {
  try {
    const { data } = await request.post(
      '/api/v2/corp/request/confirm_or_reject',
      {
        confirm,
        request_id,
        provider_id,
      },
    );
    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};
export const getFilterHistory = async ({
  address,
  start_date,
  finish_date,
  start_value,
  status_ride,
  finish_value,
}: FreightFilterParams): Promise<Freight[]> => {
  const statusRide =
    status_ride !== FILTER_STATUS.ALL ? status_ride : undefined;
  try {
    const { data } = await request.post('/api/v2/corp/history/filter', {
      status_ride: statusRide,
      address: address || undefined,
      start_value,
      finish_value,
      start_date,
      finish_date,
    });
    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const setFreightRating = async (
  freightData: FreightRating,
): Promise<void> => {
  try {
    await request.post('/api/v2/corp/rating_provider', freightData);
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};
