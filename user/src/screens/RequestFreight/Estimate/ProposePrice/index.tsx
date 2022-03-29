import React, { useEffect, useState } from 'react';
import { FormContainer } from '~/components';
import { NavigationActions, Routes } from '~/navigation';
import { useAlerts, useStores } from '~/utils';
import { FormProposePrice } from './formValues';
import ProposePrice from './ProposePrice';
import { validationSchema } from './validationSchema';

export const ProposePriceContainer: React.FC = () => {
  const [toggleCheckBoxPropose, setToggleCheckBoxPropose] = useState(false);
  const { showError } = useAlerts();
  const { request, user } = useStores();
  const [dataEstimate, setDataEstimate] = useState({
    estimated_duration: '',
    estimated_distance: '',
    estimated_price: '',
  });
  const initialValues = {
    desired_price: request.dataConstructionRequest.desired_price || '',
  };

  const getEstimate = async () => {
    try {
      await request.estimate();

      setDataEstimate(request.dataEstimate);
    } catch ({ message }) {
      showError(message);
    }
  };

  useEffect(() => {
    getEstimate();
  }, []);

  const handleNavigation = () => {
    NavigationActions.goBack();
  };

  const onSubmit = (values: FormProposePrice): void => {
    const infoPrice = { ...values };
    request.setDesiredPrice(infoPrice.desired_price);
    NavigationActions.navigate(Routes.PAYMENT);
  };

  return (
    <FormContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <ProposePrice
        toggleCheckBoxPropose={toggleCheckBoxPropose}
        setToggleCheckBoxPropose={setToggleCheckBoxPropose}
        handleNavigation={handleNavigation}
        dataEstimate={dataEstimate}
      />
    </FormContainer>
  );
};

export default ProposePriceContainer;
