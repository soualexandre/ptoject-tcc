declare type Freight = {
  status_id: number;
  request_id: number;
  status_ride: string;
  address: string;
  start_value: string;
  finish_value: string;
  start_date: string;
  finish_date: string;

  status_label: string;
  request_id: nuumber;
  provider_full_name: string;
  date: string;
  payment_mode: string;
  points: number;
  distance: number;
  time: number;
  vehicle: string;
  product: string;
  weight: number;
  negociations: number;
  is_paid: number;
  proposal_value: number;
  total_price: number;
  collect_address: string;
  dest_address: string;
};

declare type FreightFilterParams = {
  status_ride: string;
  address: string;
  start_value: string;
  finish_value: string;
  start_date: string;
  finish_date: string;
};

declare type FreightDetails = {
  request: {
    request_id: number;
    request_status: string;
    total_value: string;
    proposed_price: string;
    estimate_time: string;
    total_distance: string;
    weight: string;
    product_name: string;
    payment_method: string;
    payment_status: string;
    type_name: string;
    bodywork_name: string;
    req_create_user_time: string;
    count_negociations: string;
    provider_id: number;
    provider_rating: number;
    rating_comment: string;
    public_key: string;
  };
  provider: {
    provider_id: number;
    provider_name: string;
  };
  points: {
    points_quantity: number;
  };
};

declare type ChooseDrivers = {
  provider: {
    provider_id: number;
    provider_name: string;
    provider_rating: number;
    provider_distance: string;
    meta_status: number;
    provider_photo: string;
  };
};

declare type ProviderTypeWeight = {
  id: number;
  name: string;
  is_default: number;
};

declare type FilterHistoryParams = {
  address: string;
  start_date: string;
  finish_date: string;
  start_value?: string;
  status_ride?: string;
  finish_value?: string;
};

declare type FreightRating = {
  request_id: number;
  rating: number;
  comment?: string;
};
