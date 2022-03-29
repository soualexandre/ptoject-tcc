import React, { FC, useState } from 'react';
import { observer } from 'mobx-react';
import { FormContainer } from '~/components';
import { strings } from '~/locale';
import { navigate } from '~/navigation/actions';
import { Routes } from '~/navigation/routes';
import { USER_TYPE, useAlerts, useStores } from '~/utils';
import Address from './Address';
import { FormAddress } from './formValues';
import { validationSchema } from './validationSchema';

export const AddressContainer: FC = () => {
  const { showError, showSuccess } = useAlerts();
  const { user } = useStores();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    cep: user.getUserAuth().cep || '',
    street: user.getUserAuth().street || '',
    number: user.getUserAuth().number || '',
    complement: user.getUserAuth().complement || '',
    disctrict: user.getUserAuth().disctrict || '',
    city: user.getUserAuth().city || '',
    state: user.getUserAuth().state || '',
    country: user.getUserAuth().country || '',
  };

  const onSubmit = async (values: FormAddress): Promise<void> => {
    if (user.userType === USER_TYPE.INDIVIDUAL) {
      await user.setUserAuthIndividual(values);
    } else {
      await user.setUserAuthBusiness(values);
    }

    try {
      setIsLoading(true);
      await user.register();
      user.clearUserAuth();
      showSuccess(strings('general.registerSuccess'));
      navigate(Routes.LOGIN);
    } catch ({ message }) {
      showError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <Address isLoading={isLoading} />
    </FormContainer>
  );
};

export default observer(AddressContainer);
