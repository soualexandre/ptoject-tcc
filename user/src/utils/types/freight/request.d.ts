declare type AutoCompleteRequestFromApi = {
  freight_status: {
    id: number;
    status_name: string;
  }[];
  transaction_types: {
    value: string;
    type_name: string;
  }[];
  transaction_status: {
    value: number;
    status_name: string;
  }[];
  payment_methods: {
    value: number;
    method_name: string;
  }[];
  load_species: {
    id: number;
    load_specie_name: string;
  }[];
  load_products: {
    id: number;
    load_product_name: string;
  }[];
  provider_types: {
    id: number;
    provider_type_name: string;
  }[];
  provider_type_categories: {
    id: number;
    provider_type_category_name: string;
  }[];
  bodyworks: {
    id: number;
    bodywork_name: string;
  }[];
  other_services: {
    id: number;
    other_service_name: string;
    allow_value: number;
    allow_amount: number;
    default_value: number;
  }[];
};

declare type AutoCompleteRequestParams = Omit<
  AutoCompleteRequestFromApi,
  'other_services'
> & {
  other_services: OtherService[];
};

declare type OtherService = {
  id: number;
  other_service_name: string;
  allow_value: number;
  allow_amount: number;
  default_value: number;
  is_selected: boolean;
  input_value: string;
  input_amount: string;
};

declare type OtherServiceParams = {
  id: number;
  value: number;
  amount: number;
};

declare type DataConstructionRequestParams = {
  packaging: string;
  load_species_id: number;
  load_product_id: number | null;
  description: string;
  return_to_start: boolean;
  type_id: number;
  category_id: number;
  bodywork_id: number;
  payment_method: number;
  cargo_document: {
    height: number;
    uri: string;
    width: number;
    fileName: string;
    type: string;
    fileSize: number;
  };
  cargo_image: {
    height: number;
    uri: string;
    width: number;
    fileName: string;
    type: string;
    fileSize: number;
  };
  length: string;
  width: string;
  height: string;
  quantity: string;
  unit_weight: string;
  total?: string;
  desired_price: number;
  delivery_points: DeliveryPointsType[];
  collect_address: string;
  collect_number: string;
  collect_reference?: string;
  collect_date: string;
  collect_time: string;
  collect_name: string;
  collect_phone: string;
  collect_place_image: any;
  other_services: OtherServiceParams[];
};

declare type DeliveryPointsType = Omit<NewPointParamsDelivery, 'id'>;

declare type EstimateParam = {
  weight: string;
  return_to_start: boolean;
  provider_category: number;
  provider_type: number;
  points: PointParams[];
  other_services: OtherServiceParams[];
};

declare type EstimateRequestParams = {
  estimated_duration: string;
  estimated_distance: string;
  estimated_price: string;
};
declare type ResponseCreateRequest = {
  id: number;
  estimate_price: string;
  estimate_distance: string;
  nearby_providers: string | null;
};

declare type ParamsCreateRequest = {
  load_species_id: number;
  load_product_id: number | null;
  weight: string;
  cargo_details: {
    packaging: string;
    quantity: string;
    unitWeight: string;
    description: string;
  };
  payment_method: number;
  type_id: number;
  category_id: number;
  bodywork_id: number;
  desired_price: number;
  points: PointParams[];
  other_services: OtherServiceParams[];
};

declare type PointParams = {
  action_type: number;
  address: string;
  title: string;
  due_start_time: string;
  number: string;
  due_date: string;
  search_for: string;
  phone: string;
  reference_point?: string;
  reference_image: any;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
};

declare type NewPointParams = {
  id: number;
  action_type: number;
  collect_address: string;
  collect_number: string;
  collect_reference: string;
  collect_date: string;
  collect_time: string;
  collect_name: string;
  collect_phone: string;
  collect_place_image: any;
};

declare type NewPointParamsDelivery = {
  id: number;
  action_type: number;
  delivery_address: string;
  delivery_number: string;
  delivery_reference: string;
  delivery_date: string;
  delivery_time: string;
  delivery_name: string;
  delivery_phone: string;
  delivery_place_image: any;
};

declare type NewPointRequestParams = {
  collect: NewPointParams;
  delivery: NewPointParams[];
  provider_category: number;
  provider_type: number;
};

declare type FreightStatus = {
  id: number;
  status_name: string;
};

declare type CargoRegisterData = {
  cargo_document: {
    height: number;
    uri: string;
    width: number;
    fileName: string;
    type: string;
    fileSize: number;
  };
  cargo_image: {
    height: number;
    uri: string;
    width: number;
    fileName: string;
    type: string;
    fileSize: number;
  };
  load_product_id: number | null;
  load_species_id: number;
};

declare type EditCurrentPoint = {
  currentPoint: NewPointParams;
  typeAddress: string;
};
declare type DataRequestAddressParams = {
  collect: AddressFromGeolocation;
  delivery: AddressFromGeolocation;
};
