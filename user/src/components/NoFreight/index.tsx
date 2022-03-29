import React, { FC } from 'react';
import { View } from 'react-native';
import { IconVehicle } from '~/assets';
import { strings } from '~/locale';
import { NavigationActions, Routes } from '~/navigation';
import { NewFreight, NoDataText, NoDataTitle, NoDataWrapper } from './styles';

const NoFreight: FC = () => {
  const handleNavigate = (route: Routes): void => {
    NavigationActions.navigate(route);
  };

  return (
    <NoDataWrapper>
      <View>
        <IconVehicle />
        <NoDataTitle>{strings('noData.title')}</NoDataTitle>
        <NoDataText>{strings('noData.description')}</NoDataText>
      </View>
      <NewFreight onPress={() => handleNavigate(Routes.NEW_REQUEST_FREIGHT)}>
        {strings('noData.buttonLabel')}
      </NewFreight>
    </NoDataWrapper>
  );
};

export default NoFreight;
