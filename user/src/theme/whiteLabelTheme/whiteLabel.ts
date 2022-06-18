/**
 * Project colors schema
 */
export const projectColors = {
  primary: '#669B7D',
  secondary: '#000000',
  tertiary: '#f6f6f6',
  text: '#3F4444',
  info: '#7295EE',

  success: '#7CC888',
  warning: '#F6C953',
  failure: '#FC5858',
  dark: '#000000',
};

export const APP_NAME = 'Compre cultura';

/**
 * BASE_URL settings
 */
// export const WBASE_URL = 'https://dev1.aplicativodefretes.com.br'; // change that

export const WBASE_URL = 'http://172.17.0.1/'; // change that

/**
 * BSE_URL route autocomplete
 */
export const AUTOCOMPLETE_URL = `${WBASE_URL}/api/v1/libs/geolocation/admin/get_address_string`;
/**
 * SOCKET_URL settings
 */
export const WSOCKET_URL = 'https://demo.aplicativodeservicos.com.br:7002/'; // change that
/**
 * TRACKING_URL
 */
export const TRACKING_URL = `${WBASE_URL}/request/public/tracking/`;
