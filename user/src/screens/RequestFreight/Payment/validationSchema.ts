import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  cardNumber: Yup.number(),
  fullName: Yup.string(),
  date: Yup.string(),
  securityCode: Yup.number(),
  cardholder: Yup.number(),
});
