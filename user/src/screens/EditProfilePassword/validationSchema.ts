import { strings } from '~/locale';
import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  current: Yup.string().required(strings('error.requiredfield')),
  new: Yup.string().required(strings('error.requiredfield')),
  confirm: Yup.string()
    .required(strings('error.requiredfield'))
    .equals([Yup.ref('new')], 'As senhas não são iguais'),
});
