import { action, computed, observable, runInAction } from 'mobx';
import { persist } from 'mobx-persist';
import { AuthApi, UserApi } from '~/api';
import { isEmpty } from '~/modules';
import { NavigationActions } from '~/navigation';
import { FormEditProfileInfo } from '~/screens';
import { Storage } from '~/services';
import { FIELDS_SETTINGS, USER_TYPE } from '~/utils';
import { defaultUserProfile } from './constants/user.constants';
import {
  getUserBusinessFormData,
  getUserIndividualFormData,
  getUserProfileDTO,
} from './dto/user.dto';

const defaultTotalDashboard = {} as TotalDashboard;

export default class UserStore {
  @persist('object')
  @observable
  settings = {} as Settings;

  @persist('object')
  @observable
  userProfile: UserProfile = defaultUserProfile;

  @persist('object')
  @observable
  totalsDashboard = defaultTotalDashboard;

  @observable
  userAuth = {} as UserAuth;

  @observable
  userAuthBusiness = {} as UserAuthBusiness;

  @observable
  userType = USER_TYPE.INDIVIDUAL;

  @observable
  position = {} as GeolocationPosition;

  @computed get hasTotalsDashboard(): boolean {
    return !isEmpty(this.totalsDashboard);
  }

  @computed get hasData() {
    return this.totalsDashboard.count_freights > 0;
  }

  @computed get hasUserProfile(): boolean {
    return !isEmpty(this.userProfile);
  }

  @action
  changePassword = async ({
    current_password,
    password,
    password_confirmation,
  }: ChangePasswordProps): Promise<void> => {
    await UserApi.changeUserPassword({
      current_password,
      password,
      password_confirmation,
    });
  };

  @action
  login = async ({ email, password }: LoginApiParams): Promise<void> => {
    const userFromApi = await AuthApi.loginEmail({ email, password });
    if (userFromApi.token) {
      await Storage.setToken(userFromApi.token);
      const userProfile = getUserProfileDTO(userFromApi);
      this.userProfile = userProfile;
    }
  };

  @action
  getTotalsDashboard = async (): Promise<void> => {
    const totalsDashboard = await UserApi.getTotalsDashboard();
    this.totalsDashboard = totalsDashboard;
  };

  @action
  logout = async (): Promise<void> => {
    await AuthApi.logout();
    NavigationActions.logout();
    this.clearUser();
  };

  @action
  setUserAuthIndividual = (userAuthIndividual: Partial<UserAuth>): void => {
    this.userAuth = { ...this.userAuth, ...userAuthIndividual };
  };

  @action
  setUserAuthBusiness = (userAuthBusiness: Partial<UserAuthBusiness>): void => {
    this.userAuthBusiness = { ...this.userAuthBusiness, ...userAuthBusiness };
  };

  @action
  register = async () => {
    await this.registerIndividual();
  };

  @action
  registerIndividual = async () => {
    console.log(this.userAuth);
    const userIndividual = getUserIndividualFormData(this.userAuth);
    await UserApi.registerIndividual(userIndividual);
  };

  @action
  registerBusiness = async () => {
    const userBusiness = getUserBusinessFormData(this.userAuthBusiness);

    await UserApi.registerBusiness(userBusiness);
  };

  @action
  setUserType = (type: number) => {
    this.userType = type;
  };

  @action
  recoverPassword = async (email: string): Promise<void> => {
    await UserApi.recoverPassword(email);
  };

  @action
  clearUser = (): void => {
    Storage.clearWholeStorage();
    this.userProfile = defaultUserProfile;
    this.userAuth = {} as UserAuth;
    this.userAuthBusiness = {} as UserAuthBusiness;
  };

  @action
  clearUserAuth = (): void => {
    this.userAuth = {} as UserAuth;
  };

  @action
  clearUserAuthBusiness = (): void => {
    this.userAuthBusiness = {} as UserAuthBusiness;
  };

  @action
  getUserAuth = (): UserAuth | UserAuthBusiness => {
    if (this.userType === USER_TYPE.INDIVIDUAL) return this.userAuth;

    return this.userAuthBusiness;
  };

  @action
  getSettings = async (fields?: FIELDS_SETTINGS[]): Promise<void> => {
    this.settings = await UserApi.settings({ fields });
  };

  @action
  setGeolocationPosition = async (position: GeolocationPosition) => {
    this.position = position;
  };

  @action
  setUserLogo = (logo: string) => {
    runInAction(() => {
      this.userProfile.institution.logo = logo;
    });
  };

  @action
  profileInfoUpdate = async (infoPerson: FormEditProfileInfo) => {
    const { user, institution, address } = this.userProfile;
    const formData = new FormData();
    const logoUrlSplit = institution.logo.split('/');
    const logoFilename = logoUrlSplit[logoUrlSplit.length - 1];

    formData.append('user_id', user.id);
    formData.append('institution_id', institution.id);
    formData.append('address_id', address.id);
    formData.append('cep', address.zip_code);
    formData.append('district', address.district);
    formData.append('phone', infoPerson.phone);
    formData.append('social_reason', infoPerson.social_reason);
    formData.append('document', infoPerson.document);
    formData.append('logo', {
      uri: institution.logo,
      name: logoFilename,
      type: 'multipart/form-data',
    });
    formData.append('name', infoPerson.name);
    formData.append('responsible', infoPerson.responsible);
    formData.append('position', infoPerson.responsible_position);
    const userProfileUpdated = await UserApi.profileInfoUpdate(formData);
    runInAction(() => {
      this.userProfile = {
        user: {
          ...user,
          ...userProfileUpdated.user_updated,
          name: userProfileUpdated.user_updated.first_name,
        },
        institution: {
          ...institution,
          ...userProfileUpdated.institution_updated,
        },
        address: { ...address, ...userProfileUpdated.address_updated },
      };
    });
  };

  @action
  profileAddressUpdate = async (infoPerson: Partial<UserAddress>) => {
    const { user, institution, address } = this.userProfile;
    const formData = new FormData();
    formData.append('user_id', user.id);
    formData.append('institution_id', institution.id);
    formData.append('address_id', address.id);
    formData.append('cep', infoPerson.zip_code);
    formData.append('street', infoPerson.street);
    formData.append('number', infoPerson.number);
    formData.append('complement', infoPerson.complement);
    formData.append('district', infoPerson.district);
    formData.append('city', infoPerson.city);
    formData.append('state', infoPerson.state);
    formData.append('country', infoPerson.country);

    const userProfileUpdated = await UserApi.profileInfoUpdate(formData);
    runInAction(() => {
      this.userProfile = {
        user: {
          ...user,
          ...userProfileUpdated.user_updated,
        },
        institution: {
          ...institution,
          ...userProfileUpdated.institution_updated,
        },
        address: { ...address, ...userProfileUpdated.address_updated },
      };
    });
  };
}
