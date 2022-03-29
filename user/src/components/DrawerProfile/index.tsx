import React from 'react';
import { strings } from '~/locale';
import { useStores } from '~/utils';
import { EditProfile, ImageUser, Name, ViewText, Wrapper } from './styles';

type Props = {
  fullName: string;
  onPress(): void;
};

const DrawerProfile: React.FC<Props> = ({ fullName, onPress }) => {
  const { user } = useStores();
  return (
    <Wrapper onPress={onPress}>
      <ImageUser source={{ uri: user.userProfile.institution.logo }} />

      <ViewText>
        <Name>{fullName}</Name>
        <EditProfile>{strings('drawerProfile.editPerfil')}</EditProfile>
      </ViewText>
    </Wrapper>
  );
};
export default DrawerProfile;
