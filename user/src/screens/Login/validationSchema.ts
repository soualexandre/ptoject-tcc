import { strings } from '~/locale';
import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(strings('error.email'))
    .required(strings('error.requiredfield')),
  password: Yup.string().required(strings('error.requiredfield')),
});
