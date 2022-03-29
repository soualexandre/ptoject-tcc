import React, { FC } from 'react';
import { FormContainer } from '~/components';
import { strings } from '~/locale';
import { FormikHelpers, observer } from '~/modules';
import { NavigationActions, Routes } from '~/navigation';
import { navigate } from '~/navigation/actions';
import { useAlerts, useStores } from '~/utils';
import { FormRecoverPassword } from './formValues';
import RecoverPassword from './RecoverPassword';
import { validationSchema } from './validationSchema';

export const RecoverPasswordContainer: FC = () => {
  const { user } = useStores();
  const { userProfile } = user;
  const { showError, showSuccess } = useAlerts();

  const initialValues = {
    email: userProfile.user.email || '',
  };

  const onSubmit = async (
    values: FormRecoverPassword,
    { setSubmitting }: FormikHelpers<FormRecoverPassword>,
  ): Promise<void> => {
    const recoverPassword = { ...values };

    try {
      setSubmitting(true);
      await user.recoverPassword(recoverPassword.email);
      showSuccess(strings('general.recoverPasswordSuccess'));
      navigate(Routes.LOGIN);
    } catch ({ message }) {
      showError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const goBack = () => {
    NavigationActions.goBack();
  };

  return (
    <FormContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <RecoverPassword onGoBack={goBack} />
    </FormContainer>
  );
};
export default observer(RecoverPasswordContainer);
