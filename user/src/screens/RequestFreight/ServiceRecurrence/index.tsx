import React, { FC, useState } from 'react';
import { observer } from 'mobx-react';
import { NavigationActions, Routes } from '~/navigation';
import ServiceRecurrence from './ServiceRecurrence';

const ServiceRecurrenceContainer: FC = () => {
  const [toggleServiceRecurrence, setToggleServiceRecurrence] = useState(false);

  const onGoBack = () => {
    NavigationActions.goBack();
  };

  const onNext = () => {
    NavigationActions.navigate(Routes.FREIGHT_CONCLUDE);
  };

  return (
    <ServiceRecurrence
      toggleServiceRecurrence={toggleServiceRecurrence}
      setToggleServiceRecurrence={setToggleServiceRecurrence}
      onGoBack={onGoBack}
      onNext={onNext}
    />
  );
};

export default observer(ServiceRecurrenceContainer);
