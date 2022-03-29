import { strings } from '~/locale';
import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  corporate_name: Yup.string().required(strings('error.requiredfield')),
  fantasy_name: Yup.string().required(strings('error.requiredfield')),
  business_document: Yup.string().required(strings('error.requiredfield')),
  responsible: Yup.string().required(strings('error.requiredfield')),
  position: Yup.string().required(strings('error.requiredfield')),
});
