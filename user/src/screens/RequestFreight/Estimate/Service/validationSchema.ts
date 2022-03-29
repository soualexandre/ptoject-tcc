import { strings } from '~/locale';
import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  amount: Yup.string().required(strings('error.requiredfield')),
  password: Yup.string().required(strings('error.requiredfield')),
});
