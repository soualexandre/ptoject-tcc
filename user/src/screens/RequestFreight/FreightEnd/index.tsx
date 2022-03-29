import React, { FC } from 'react';
import { NavigationActions, Routes, Stacks } from '~/navigation';
import { useStores } from '~/utils';
import FreightEnd from './FreightEnd';

const FreightEndContainer: FC = () => {
  const { request } = useStores();

  const handleNavigate = (screen: Routes) => {
    request.clearRequest();
    NavigationActions.navigate(screen);
  };

  const onNext = () => {
    request.clearRequest();
    NavigationActions.resetRouteToTop(Stacks.PRIVATE, {
      name: Routes.HOME,
    });
  };

  return <FreightEnd handleNavigate={handleNavigate} onNext={onNext} />;
};

export default FreightEndContainer;
