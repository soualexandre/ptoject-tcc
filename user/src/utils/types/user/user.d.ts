// type retornado no login
declare type UserData = UserProfile & {
  name: string;
  token: string;
  picture: string;
};

declare type ChangePasswordProps = {
  current_password: string;
  password: string;
  password_confirmation: string;
};

declare type TotalDashboard = {
  balance: string;
  count_freights: number;
  sum_freights: string;
  average_freights: string;
  have_order?: boolean;
};

declare type UserInfo = {
  id: number;
  name: string;
  email: string;
  gender: string;
  token: string;
};

declare type UserAddress = {
  id: number;
  zip_code: string;
  street: string;
  number: number | string;
  complement: string;
  district: string;
  city: string;
  state: string;
  country: string;
};

// type do perfil do usuário
declare type UserProfile = {
  user: UserInfo;
  institution: {
    id: number;
    social_reason: string;
    document: string;
    type: string;
    logo: string;
    responsible: string;
    responsible_position: string;
    phone: string;
  };
  address: UserAddress;
};

declare type UserUpdatedFromApi = {
  user_updated: UserInfo & {
    first_name: string;
  };
  institution_updated: {
    id: number;
    social_reason: string;
    document: string;
    type: string;
    logo: string;
    responsible: string;
    responsible_position: string;
    phone: string;
  };
  address_updated: UserAddress;
};

// type do endereço do usuário
declare type UserProfileAddress = {
  zip_code: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  country: string;
};

// type das informações de perfil do usuário
declare type UserProfileInfo = {
  logo: string;
  phone: string;
  social_reason: string;
  name: string;
  document: string;
  responsible: string;
  responsible_position: string;
};

// type para cadastro pessoa física
declare type UserAuth = {
  name: string;
  username: string;
  password: string;
  confirmPassword?: string;
};
// type para cadastro empresa
declare type UserAuthBusiness = {
  fantasy_name: string;
  corporate_name: string;
  business_document: string;
  responsible: string;
  position: string;
  username: string;
  phone: string;
  password: string;
  confirmPassword?: string;
  find_us: string;
  logo: string;
  cep: string;
  number: string;
  complement: string;
  disctrict: string;
  city: string;
  street: string;
  state: string;
  country: string;
};

declare type Settings = {
  splash_settings: {
    enable_freight_record_type: string;
    language: string;
  };
  create_request_settings: {
    step_by_step_automatic_vehicle_selection: string;
    step_by_step_discount_coupon: string;
    step_by_step_point_type: string;
    step_by_step_points_images: string;
  };
};

declare type AddressFromGeolocation = {
  main_text: string;
  secondary_text: string;
  place_id: null | number;
  latitude: number;
  longitude: number;
  clicker: string;
  sessionToken: string;
};

declare type GeolocationPosition = {
  latitude: string;
  longitude: string;
  accuracy: string;
  altitude: string;
  altitudeAccuracy: string;
  heading: string;
  speed: string;
  timestamp: string;
};
