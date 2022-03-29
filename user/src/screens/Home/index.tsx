import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { NavigationActions, Routes } from '~/navigation';
import {
  request_storage_runtime_permission,
  useAlerts,
  useStores,
} from '~/utils';
import Home from './Home';

const HomeContainer: FC = () => {
  const { user, freight } = useStores();
  const { userProfile, totalsDashboard, hasTotalsDashboard, hasData } = user;
  const { hasConcludedFreight, hasFreight } = freight;
  const [loaded, setLoaded] = useState(false);
  const { showError } = useAlerts();
  const handleNavigate = (route: Routes): void => {
    NavigationActions.navigate(route);
  };
  const getTotalsDashboard = async () => {
    try {
      await request_storage_runtime_permission();
      await user.getTotalsDashboard();
      await user.getSettings();
      setLoaded(true);
    } catch ({ message }) {
      setLoaded(true);
      showError(message);
    }
  };

  const getFreightsHistory = async () => {
    try {
      await freight.getFreightsHistory();
      await freight.getHasConcludedFreight();
    } catch ({ message }) {
      if (hasFreight) {
        showError(message);
      }
    }
  };

  useEffect(() => {
    getTotalsDashboard();
    getFreightsHistory();
  }, []);

  return (
    <Home
      userName={userProfile.user.name}
      totalsDashboard={totalsDashboard}
      hasTotalsDashboard={hasTotalsDashboard}
      hasData={hasFreight}
      hasConcludedFreight={hasConcludedFreight}
      handleNavigate={handleNavigate}
      loaded={loaded}
    />
  );
};

export default observer(HomeContainer);
