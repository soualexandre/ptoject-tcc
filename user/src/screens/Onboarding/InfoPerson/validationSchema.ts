import { strings } from '~/locale';
import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(strings('error.requiredfield')),
  document: Yup.string().required(strings('error.requiredfield')),
  // find_us: Yup.string(),
});
