import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { NavigationActions } from '~/navigation';
import { useStores } from '~/utils';
import EditProfile from './EditProfile';

const EditProfileContainer: FC = () => {
  const { user } = useStores();
  const { userProfile } = user;

  const goBack = () => {
    NavigationActions.goBack();
  };

  return <EditProfile onGoBack={goBack} userProfile={userProfile} />;
};

export default observer(EditProfileContainer);
