import { strings } from '~/locale';

export const initialValues = {
  type_address: '',
  collect_address: '',
  collect_number: '',
  collect_reference: '',
  collect_date: '',
  collect_time: '',
  collect_name: '',
  collect_phone: '',
};

export const typeAddressItems = [
  strings('collectionPoint.collect'),
  strings('collectionPoint.delivery'),
];

export type FormCollectionPoint = typeof initialValues;
