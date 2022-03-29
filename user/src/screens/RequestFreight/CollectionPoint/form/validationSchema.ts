import { strings } from '~/locale';
import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  type: Yup.string(),
  collect_address: Yup.string().required(strings('error.requiredfield')),
  collect_number: Yup.string(),
  collect_reference: Yup.string(),
  collect_date: Yup.string().required(strings('error.requiredfield')),
  collect_time: Yup.string().required(strings('error.requiredfield')),
  collect_name: Yup.string().required(strings('error.requiredfield')),
  collect_phone: Yup.string().required(strings('error.requiredfield')),
});
