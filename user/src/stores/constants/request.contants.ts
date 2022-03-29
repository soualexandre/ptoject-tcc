export const defaultAutoComplete = {} as AutoCompleteRequestParams;

export const defaultDataRequestAddress = {
  collect: {
    main_text: '',
    secondary_text: '',
  } as AddressFromGeolocation,
  delivery: {
    main_text: '',
    secondary_text: '',
  } as AddressFromGeolocation,
};

export const defaultRequest: NewPointRequestParams = {
  collect: {
    id: -1, // ID_DEFAULT
    action_type: 0,
    collect_address: '',
    collect_number: '',
    collect_reference: '',
    collect_date: '',
    collect_time: '',
    collect_name: '',
    collect_phone: '',
    collect_place_image: {},
  },
  delivery: [],
  provider_category: 0,
  provider_type: 0,
};

export const defaultCurrentPoint = {} as EditCurrentPoint;
