import React, { useEffect, useState } from 'react';
import { NavigationActions, Routes } from '~/navigation';
import {
  FIELDS_TYPE,
  getBooleanFromString,
  useAlerts,
  useStores,
} from '~/utils';
import Vehicle from './Vehicle';

export const VehicleContainer: React.FC = () => {
  const { request, user } = useStores();
  const { showError } = useAlerts();
  const { create_request_settings } = user.settings;
  const [providerTypes, setProviderTypes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [providerTypesId, setProviderTypesId] = useState(0);
  const [providerTypesCategoryId, setProviderTypesCategoryId] = useState(0);
  const [bodyworksId, setBodyworksId] = useState(0);
  const [providerTypesCategory, setProviderTypesCategory] = useState<string[]>(
    [],
  );
  const [bodyworks, setBodyworks] = useState<string[]>([]);
  const showProviderTypeByWeight = !getBooleanFromString(
    create_request_settings.step_by_step_automatic_vehicle_selection,
  );
  const [dataEstimate, setDataEstimate] = useState({
    estimated_duration: '',
    estimated_distance: '',
    estimated_price: '',
  });
  const onGoBack = () => {
    NavigationActions.goBack();
  };

  const onChangeBodyworks = (value: string) => {
    try {
      const info = request.onChangeBodyworks(value);

      setBodyworksId(info.id);
    } catch ({ message }) {
      showError(message);
    }
  };

  const onNext = () => {
    request.vehicleRequest({
      type_id: providerTypesId,
      category_id: providerTypesCategoryId,
      bodywork_id: bodyworksId,
    });
    NavigationActions.navigate(Routes.ESTIMAT_SERVICE);
  };

  const autoCompleteProviderTypeCategories = async () => {
    try {
      const info = request.autoCompleteProviderTypeCategories();

      setProviderTypesCategory(info.provider_types_category);
      setBodyworks(info.body_works);
      setBodyworksId(info.body_works_id);
      setIsLoading(false);
    } catch ({ message }) {
      showError(message);
    }
  };
  const onChangeProviderTypeCategory = async (value: string) => {
    try {
      const info = await request.onChangeProviderTypeCategory(value);
      setProviderTypesCategoryId(info.id);
    } catch ({ message }) {
      showError(message);
    }
  };

  const onChangeProviderType = async (value: string) => {
    try {
      const info = await request.onChangeProviderType(value);

      autoCompleteProviderTypeCategories();
      setProviderTypesId(info.id);
    } catch ({ message }) {
      showError(message);
    }
  };

  const autoCompleteProviderType = async () => {
    if (showProviderTypeByWeight) {
      try {
        const info = await request.autoCompleteProviderType();
        await request.onChangeProviderType(info.provider_types_name[0]);

        setProviderTypes(info.provider_types_name);
        setProviderTypesId(info.id);
        autoCompleteProviderTypeCategories();
      } catch ({ message }) {
        showError(message);
      }
    } else {
      request.providerTypeByWeight(request.dataConstructionRequest.unit_weight);
      onChangeProviderType('');
    }

    setDataEstimate(request.dataEstimate);
  };

  const getEstimate = async () => {
    try {
      setIsLoading(true);
      await request.estimate();
      await request.autoComplete({ fields: [FIELDS_TYPE.PROVIDER_TYPES] });

      autoCompleteProviderType();
    } catch ({ message }) {
      showError(message);
    }
  };

  useEffect(() => {
    getEstimate();
  }, []);

  return (
    <Vehicle
      onChangeProviderType={onChangeProviderType}
      onChangeProviderTypeCategory={onChangeProviderTypeCategory}
      provider_types={providerTypes}
      provider_types_category={providerTypesCategory}
      bodyworks={bodyworks}
      onChangeBodyworks={onChangeBodyworks}
      handleNavigation={onGoBack}
      onNext={onNext}
      isLoading={isLoading}
    />
  );
};

export default VehicleContainer;
