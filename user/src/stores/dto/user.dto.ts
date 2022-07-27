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
  const { name, username, password } = userAuth;
  const formData = new FormData();
  formData.append('name', `0${name}`);
  formData.append('username', username);
  formData.append('password', password);

  return formData;
};
export const getUserBusinessFormData = (
  userAuthBusiness: UserAuthBusiness,
): FormData => {
  const { name, email, password } = userAuthBusiness;
  const formData = new FormData();
  formData.append('name', `${name}`);
  formData.append('email', email);
  formData.append('password', password);

  return formData;
};
