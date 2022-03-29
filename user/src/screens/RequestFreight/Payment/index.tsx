import React, { FC, useState } from 'react';
import { observer } from 'mobx-react';
import { FormContainer } from '~/components';
import { NavigationActions, Routes } from '~/navigation';
import { useStores } from '~/utils';
import { FormPayment, initialValues } from './formValues';
import Payment from './Payment';
import { validationSchema } from './validationSchema';

const PaymentContainer: FC = () => {
  const { request } = useStores();
  const [toggleCheckPayment, setToggleCheckPayment] = useState(0);
  const balanceAvailable = 'R$ 2,91';

  const onSubmit = (values: FormPayment): void => {
    request.paymentRequest(toggleCheckPayment);
    NavigationActions.navigate(Routes.FREIGHT_CONCLUDE);
  };

  const handleNavigation = () => {
    NavigationActions.goBack();
  };

  return (
    <FormContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <Payment
        handleNavigation={handleNavigation}
        setToggleCheckPayment={setToggleCheckPayment}
        balanceAvailable={balanceAvailable}
        toggleCheckPayment={toggleCheckPayment}
      />
    </FormContainer>
  );
};

export default observer(PaymentContainer);
