import { strings } from '~/locale';
import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  packaging: Yup.string().required(strings('error.requiredfield')),
  length: Yup.number().required(strings('error.requiredfield')),
  width: Yup.number().required(strings('error.requiredfield')),
  height: Yup.number().required(strings('error.requiredfield')),
  quantity: Yup.number().required(strings('error.requiredfield')),
  unit_weight: Yup.number().required(strings('error.requiredfield')),
  total: Yup.number(),
});
