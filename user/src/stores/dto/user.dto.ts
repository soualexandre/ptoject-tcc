import { isEmpty } from '~/modules';

export const getUserProfileDTO = (userData: UserData): UserProfile => ({
  user: {
    ...userData.user,
    token: userData.token,
  },
  institution: {
    ...userData.institution,
    logo: isEmpty(userData.institution.logo)
      ? userData.picture
      : userData.institution.logo,
  },
  address: userData.address,
});

export const getUserIndividualFormData = (userAuth: UserAuth): FormData => {
  const {
    cep,
    complement,
    city,
    country,
    document,
    email,
    password,
    // find_us,
    logo,
    name,
    disctrict,
    number,
    phone,
    street,
    state,
  } = userAuth;

  const logoUrlSplit = logo.split('/');
  const logoFilename = logoUrlSplit[logoUrlSplit.length - 1];

  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  formData.append('phone', `0${phone}`);
  formData.append('country', country);
  formData.append('document', document);
  formData.append('logo', {
    uri: logo,
    name: logoFilename,
    type: 'multipart/form-data',
  });
  formData.append('find_us', '1');
  formData.append('name', name);
  formData.append('district', disctrict);
  formData.append('number', number);
  formData.append('city', city);
  formData.append('complement', complement);
  formData.append('cep', cep);
  formData.append('state', state);
  formData.append('street', street);

  return formData;
};
export const getUserBusinessFormData = (
  userAuthBusiness: UserAuthBusiness,
): FormData => {
  const {
    cep,
    complement,
    city,
    country,
    business_document,
    corporate_name,
    email,
    password,
    // find_us,
    logo,
    position,
    responsible,
    fantasy_name,
    disctrict,
    number,
    phone,
    street,
    state,
  } = userAuthBusiness;

  const logoUrlSplit = logo.split('/');
  const logoFilename = logoUrlSplit[logoUrlSplit.length - 1];

  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  formData.append('phone', `${phone}`);
  formData.append('fantasy_name', fantasy_name);
  formData.append('corporate_name', corporate_name);
  formData.append('position', position);
  formData.append('responsible', responsible);
  formData.append('business_document', business_document);
  formData.append('find_us', '1');
  formData.append('logo', {
    uri: logo,
    name: logoFilename,
    type: 'multipart/form-data',
  });
  formData.append('district', disctrict);
  formData.append('number', number);
  formData.append('city', city);
  formData.append('complement', complement);
  formData.append('cep', cep);
  formData.append('state', state);
  formData.append('country', country);
  formData.append('street', street);

  return formData;
};
