import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  desired_price: Yup.string(),
});
