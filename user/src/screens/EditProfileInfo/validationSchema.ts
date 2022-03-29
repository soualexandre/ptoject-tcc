import { strings } from '~/locale';
import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  phone: Yup.string().required(strings('error.requiredfield')),
  social_reason: Yup.string().required(strings('error.requiredfield')),
  name: Yup.string().required(strings('error.requiredfield')),
  document: Yup.string().required(strings('error.requiredfield')),
});
