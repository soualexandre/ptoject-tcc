import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { NavigationActions, Routes, Stacks } from '~/navigation';
import { FILTER_TYPE, FREIGHT_STATUS, useAlerts, useStores } from '~/utils';
import FreightHistory from './FreightHistory';

export const FreightHistoryContainer: FC = () => {
  const { freight } = useStores();
  const { hasFreight } = freight;
  const [loaded, setLoaded] = useState(false);

  const { showError } = useAlerts();

  const getFreightsHistory = async () => {
    try {
      await freight.getFreightsHistory();
      setLoaded(true);
    } catch ({ message }) {
      setLoaded(true);
      if (hasFreight) {
        showError(message);
      }
    }
  };

  const freightsInProgress = freight.freights.filter(
    (freight) => freight.status_id <= FREIGHT_STATUS.IN_PROGRESS,
  );

  const freightsFinished = freight.freights.filter(
    (freight) => freight.status_id >= FREIGHT_STATUS.LATE_DELIVERY,
  );

  const handleNavigateFilter = () => {
    NavigationActions.navigate(Stacks.MODAL, {
      screen: Routes.FILTER,
      params: {
        type: FILTER_TYPE.HISTORY,
      },
    });
  };

  useEffect(() => {
    getFreightsHistory();
  }, []);

  return (
    <FreightHistory
      handleNavigateFilter={handleNavigateFilter}
      freightsInProgress={freightsInProgress}
      freightsFinished={freightsFinished}
      hasFreight={hasFreight}
      refreshFreight={getFreightsHistory}
      loaded={loaded}
    />
  );
};

export default observer(FreightHistoryContainer);
