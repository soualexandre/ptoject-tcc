import { strings } from '~/locale';
import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  email: Yup.string().required(strings('error.requiredfield')),
});
