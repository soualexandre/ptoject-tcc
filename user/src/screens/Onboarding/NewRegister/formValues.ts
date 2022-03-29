import { strings } from '~/locale';

export const initialValues = {
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};

export const radioProps = [
  { label: strings('newRegister.individual'), value: 0 },
  { label: strings('newRegister.business'), value: 1 },
];

export type FormNewRegister = typeof initialValues;
