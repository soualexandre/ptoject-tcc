import { AxiosError } from 'axios';
import { ResponseError } from '~/utils';
import { FIELDS_TYPE, PropsAutoComple } from '~/utils/types';
import request from '../request';

const fieldsType = [
  FIELDS_TYPE.BODYWORKS,
  FIELDS_TYPE.FREIGHT_STATUS,
  FIELDS_TYPE.LOAD_PRODUCTS,
  FIELDS_TYPE.LOAD_SPECIES,
  FIELDS_TYPE.PAYMENT_METHODS,
  FIELDS_TYPE.PROVIDER_TYPES,
  FIELDS_TYPE.PROVIDER_TYPE_CATEGORIES,
  FIELDS_TYPE.TRANSACTION_STATUS,
  FIELDS_TYPE.TRANSACTION_TYPES,
  FIELDS_TYPE.OTHER_SERVICES,
];

export const autoComplete = async ({
  fields = fieldsType,
  load_specie_id = 0,
  provider_type_id = 0,
}: PropsAutoComple): Promise<AutoCompleteRequestFromApi> => {
  try {
    const { data } = await request.post('/api/v2/corp/autocomplete', {
      fields,
      load_specie_id,
      provider_type_id,
    });
    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const createRequest = async (
  params: ParamsCreateRequest,
): Promise<ResponseCreateRequest> => {
  try {
    const { data } = await request.post('/api/v2/corp/request/create', {
      ...params,
    });

    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const estimate = async (
  parameters: EstimateParam,
): Promise<EstimateRequestParams> => {
  try {
    const { data } = await request.post('/api/v2/corp/request/estimate', {
      ...parameters,
    });

    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};

export const providerTypeByWeight = async (
  weight: string,
): Promise<ProviderTypeWeight> => {
  try {
    const { data } = await request.post(
      '/api/v2/vehicle/provider_type_by_weight',
      { weight },
    );

    return data;
  } catch (error) {
    throw new ResponseError(error as AxiosError);
  }
};
