import React, { FC } from 'react';
import { strings } from '~/locale';
import { Icon } from '~/modules';
import { NavigationActions } from '~/navigation';
import { Routes } from '~/navigation/routes';
import {
  Button,
  FormWrapper,
  ImageUser,
  Name,
  Text,
  ViewText,
  Wrapper,
} from './styles';

type Props = {
  onGoBack(): void;
  userProfile: UserProfile;
};

const navigate = (route: string, paramsRoute?: any): void => {
  NavigationActions.navigate(route, paramsRoute);
};
const navigateToInfoAccount = () => {
  navigate(Routes.EDIT_PROFILE_INFO);
};
const navigateToInfoAddress = () => {
  navigate(Routes.EDIT_PROFILE_ADDRESS);
};
const navigateToChangePassword = () => {
  navigate(Routes.EDIT_PROFILE_PASSWORD);
};

const EditProfile: FC<Props> = ({ onGoBack, userProfile }) => {
  const { institution, user } = userProfile;
  return (
    <Wrapper
      title="Editar Perfil"
      fullWidth
      isMainSimpleHeader
      bounces={false}
      onBackButtonPress={onGoBack}
    >
      <FormWrapper>
        <ImageUser source={{ uri: institution.logo }} />

        <ViewText>
          <Name>{user.name}</Name>
        </ViewText>
      </FormWrapper>

      <Button onPress={navigateToInfoAccount}>
        <Icon name="face-profile" size={26} color="grey" />
        <Text>{strings('infoAccount.title')}</Text>
      </Button>

      <Button onPress={navigateToInfoAddress}>
        <Icon name="map-marker" size={26} color="grey" />
        <Text>{strings('address.title')}</Text>
      </Button>

      <Button onPress={navigateToChangePassword}>
        <Icon name="lock" size={26} color="grey" />
        <Text>{strings('infoAccount.changePassword')}</Text>
      </Button>
    </Wrapper>
  );
};

export default EditProfile;
