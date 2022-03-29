import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  cep: Yup.string(),
  street: Yup.string().required('campo obrigatório'),
  number: Yup.string().required('campo obrigatório'),
  complement: Yup.string().required('campo obrigatório'),
  disctrict: Yup.string(),
  city: Yup.string().required('campo obrigatório'),
  state: Yup.string().required('campo obrigatório'),
  country: Yup.string().required('campo obrigatório'),
});
