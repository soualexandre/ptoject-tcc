import { strings } from '~/locale';
import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  username: Yup.string().required(strings('error.requiredfield')),
  name: Yup.string().required(strings('error.requiredfield')),
  password: Yup.string().required(strings('error.requiredfield')),
  confirmPassword: Yup.string()
    .equals([Yup.ref('password')], 'As senhas não são iguais')
    .required(strings('error.requiredfield')),
});
