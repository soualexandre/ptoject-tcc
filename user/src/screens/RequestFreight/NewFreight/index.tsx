import React, { FC, useState } from 'react';
import { NavigationActions, Routes } from '~/navigation';
import { FIELDS_TYPE, useAlerts, useStores } from '~/utils';

import NewFreight from './NewFreight';

const NewFreightContainer: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { request } = useStores();
  const { showError } = useAlerts();

  const onNext = async () => {
    try {
      setIsLoading(true);
      request.clearRequestAddress();
      request.clearRequest();
      await request.autoComplete({ fields: [FIELDS_TYPE.LOAD_SPECIES] });

      NavigationActions.navigate(Routes.CARGO_REGISTER);
    } catch ({ message }) {
      showError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return <NewFreight onNext={onNext} isLoading={isLoading} />;
};

export default NewFreightContainer;
