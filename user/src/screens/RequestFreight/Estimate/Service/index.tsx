import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { NavigationActions, Routes } from '~/navigation';
import { useAlerts, useStores } from '~/utils';
import Service from './Service';

const ServiceContainer: React.FC = () => {
  const { showError } = useAlerts();
  const { request } = useStores();
  const { other_services } = request.dataAutoComplete;

  const onGoBack = () => {
    NavigationActions.goBack();
  };

  const onNext = () => {
    request.tryRegisterOtherServices();
    NavigationActions.navigate(Routes.ESTIMAT_PROPOSE_PRICE);
  };

  const handleOnChange = (selected: boolean, id: number) => {
    request.selectOtherService(selected, id);
  };

  const handleChangeInputValue = (value: string, id: number) => {
    request.setOtherServiceInputValue(value, id);
  };

  const handleChangeInputAmount = (value: string, id: number) => {
    request.setOtherServiceInputAmount(value, id);
  };

  const getServices = async () => {
    try {
      await request.getOtherServices();
    } catch ({ message }) {
      showError(message);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <Service
      services={other_services}
      handleNavigation={onGoBack}
      onNext={onNext}
      handleChangeValue={handleOnChange}
      handleChangeInputValue={handleChangeInputValue}
      handleChangeInputAmount={handleChangeInputAmount}
    />
  );
};

export default observer(ServiceContainer);
