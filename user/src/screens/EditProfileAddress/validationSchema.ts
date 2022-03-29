import { strings } from '~/locale';
import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  zip_code: Yup.string(),
  street: Yup.string().required(strings('error.requiredfield')),
  number: Yup.string().required(strings('error.requiredfield')),
  district: Yup.string(),
  city: Yup.string().required(strings('error.requiredfield')),
  state: Yup.string().required(strings('error.requiredfield')),
  country: Yup.string().required(strings('error.requiredfield')),
});
