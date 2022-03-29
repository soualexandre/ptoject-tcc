import { omit } from 'lodash';
import { FREIGHT_ADRESS_TYPE, getAlphabetPoint } from '~/utils';

export const getContructionParamsRequestCreate = ({
  dataRequest,
  request,
  address,
}: CreateConstructionRequestProps): EstimateParam => {
  const delivery_points = getEstimatedPoints(request.delivery_points, address);
  const dataRequestParams = omit(request, 'delivery_points');
  return {
    ...dataRequestParams,
    weight: request.unit_weight,
    return_to_start: request.return_to_start,
    provider_category: dataRequest.provider_category,
    provider_type: dataRequest.provider_type,
    other_services: request.other_services,
    points: [
      {
        action_type: FREIGHT_ADRESS_TYPE.COLLECT,
        address: request.collect_address,
        number: request.collect_number,
        due_date: request.collect_date.replace(/\//g, '-'),
        title: request.return_to_start ? '@' : 'A',
        due_start_time: request.collect_time,
        search_for: request.collect_name,
        phone: request.collect_phone,
        reference_point: request.collect_reference,
        reference_image: request.collect_place_image.uri,
        geometry: {
          location: {
            lat: address.collect.latitude,
            lng: address.collect.longitude,
          },
        },
      },
      ...delivery_points,
    ],
  };
};

type AddressCreateRequest = {
  collect: AddressFromGeolocation;
  delivery: AddressFromGeolocation;
};

type CreateRequestProps = {
  dataConstructionRequest: DataConstructionRequestParams;
  address: AddressCreateRequest;
};

type CreateConstructionRequestProps = {
  dataRequest: NewPointRequestParams;
  request: DataConstructionRequestParams;
  address: AddressCreateRequest;
};

export const getParamsCreateRequest = ({
  dataConstructionRequest,
  address,
}: CreateRequestProps): ParamsCreateRequest => {
  const delivery_points = getEstimatedPoints(
    dataConstructionRequest.delivery_points,
    address,
  );
  const dataRequest = omit(dataConstructionRequest, 'delivery_points');
  return {
    ...dataRequest,
    weight: dataConstructionRequest.unit_weight,
    cargo_details: {
      packaging: dataConstructionRequest.packaging,
      quantity: dataConstructionRequest.quantity,
      unitWeight: dataConstructionRequest.unit_weight,
      description: dataConstructionRequest.description,
    },
    payment_method: 1,
    points: [
      {
        action_type: FREIGHT_ADRESS_TYPE.COLLECT,
        address: dataConstructionRequest.collect_address,
        number: dataConstructionRequest.collect_number,
        due_date: dataConstructionRequest.collect_date.replace(/\//g, '-'),
        title: dataConstructionRequest.return_to_start ? '@' : 'A',
        due_start_time: `${dataConstructionRequest.collect_time}:00`,
        search_for: dataConstructionRequest.collect_name,
        phone: dataConstructionRequest.collect_phone,
        reference_point: dataConstructionRequest.collect_reference,
        reference_image: dataConstructionRequest.collect_place_image.uri,
        geometry: {
          location: {
            lat: address.collect.latitude,
            lng: address.collect.longitude,
          },
        },
      },
      ...delivery_points,
    ],
  };
};

const getEstimatedPoints = (
  points: DeliveryPointsType[],
  address: AddressCreateRequest,
) =>
  points.map((point, index) => ({
    action_type: FREIGHT_ADRESS_TYPE.DELIVERY,
    address: point.delivery_address,
    number: point.delivery_number,
    due_date: point.delivery_date.replace(/\//g, '-'),
    title: getAlphabetPoint(index),
    due_start_time: `${point.delivery_time}:00`,
    search_for: point.delivery_name,
    phone: point.delivery_phone,
    reference_point: point.delivery_reference,
    reference_image: point.delivery_place_image.uri,
    geometry: {
      location: {
        lat: address.delivery.latitude,
        lng: address.delivery.longitude,
      },
    },
  }));
