import React, { FC, useEffect, useState } from 'react';
import { observer } from '~/modules';
import { NavigationActions, Routes } from '~/navigation';
import { useAlerts, useCurrencyFormat, useStores } from '~/utils';
import FreightConclude from './FreightConclude';

const FreightConcludeContainer: FC = () => {
  const { showError } = useAlerts();
  const { request, user } = useStores();
  const [services, setServices] = useState('');
  const [showServices, setShowServices] = useState(false);
  const { currencyFormat } = useCurrencyFormat();
  const [dataEstimate, setDataEstimate] = useState({
    estimated_duration: '',
    estimated_distance: '',
    estimated_price: '',
  });

  const getEstimate = async () => {
    try {
      await request.estimate();

      setDataEstimate(request.dataEstimate);
    } catch ({ message }) {
      showError(message);
    }
  };

  const onNext = async () => {
    try {
      await request.createRequest();
      NavigationActions.navigate(Routes.FREIGHT_END);
    } catch ({ message }) {
      showError(message);
    }
  };

  const getIconName = () => (showServices ? 'chevron-up' : 'chevron-down');

  const toggleOtherService = () => {
    setShowServices((oldsate) => !oldsate);
  };

  const setOtherServices = () => {
    const serviceList = request.dataConstructionRequest.other_services;
    let currentServices = '';
    serviceList.forEach((service: OtherServiceParams, index: number) => {
      if (index !== serviceList.length - 1) {
        currentServices += `${getOtherServiceName(service.id)} - `;
      } else {
        currentServices += `${getOtherServiceName(service.id)}`;
      }
    });
    setServices(currentServices);
  };

  const getOtherServiceName = (id: number) => {
    const { other_services } = request.dataAutoComplete;
    const service = other_services.find((service) => service.id === id);
    return service?.other_service_name;
  };

  const onGoBack = () => {
    NavigationActions.goBack();
  };

  const getNameCategory = (id: number) => {
    const resultCategory = request.dataAutoComplete.load_species.find(
      (products) => products.id === id,
    );
    return resultCategory ? resultCategory.load_specie_name : '--';
  };

  const getNameProduct = (id: number | null) => {
    if (id) {
      const resultProducts = request.dataAutoComplete.load_products.find(
        (products) => products.id === id,
      );

      return resultProducts ? resultProducts?.load_product_name : '--';
    }
    return '';
  };

  const getProviderType = (id: number) => {
    const provider_type = request.dataAutoComplete.provider_types.find(
      (products) => products.id === id,
    );

    return provider_type ? provider_type.provider_type_name : '--';
  };

  const getNameCategoryVehicle = (id: number) => {
    const category_vehicle =
      request.dataAutoComplete.provider_type_categories.find(
        (products) => products.id === id,
      );

    return category_vehicle
      ? category_vehicle.provider_type_category_name
      : '--';
  };

  const getNameVehicleBody = (id: number) => {
    const bodywork = request.dataAutoComplete.bodyworks.find(
      (products) => products.id === id,
    );

    return bodywork ? bodywork.bodywork_name : '--';
  };

  useEffect(() => {
    setOtherServices();
    getEstimate();
  }, []);

  return (
    <FreightConclude
      onNext={onNext}
      onGoBack={onGoBack}
      dataRequest={request.dataConstructionRequest}
      dataRequestAddress={request.dataRequestAddress}
      userProfile={user.userProfile}
      dataEstimate={dataEstimate}
      getNameCategory={getNameCategory}
      getNameProduct={getNameProduct}
      getProviderType={getProviderType}
      getNameCategoryVehicle={getNameCategoryVehicle}
      getNameVehicleBody={getNameVehicleBody}
      getIconName={getIconName}
      toggleOtherService={toggleOtherService}
      showServices={showServices}
      services={services}
      currency={currencyFormat}
    />
  );
};

export default observer(FreightConcludeContainer);
