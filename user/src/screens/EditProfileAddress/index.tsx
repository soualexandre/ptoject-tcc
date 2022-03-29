import React, { FC } from 'react';
import { FormContainer } from '~/components';
import { strings } from '~/locale';
import { FormikHelpers, observer } from '~/modules';
import { NavigationActions, Routes } from '~/navigation';
import { navigate } from '~/navigation/actions';
import { useAlerts, useStores } from '~/utils';
import EditProfileAddress from './EditProfileAddress';
import { FormEditProfileAddress } from './formValues';
import { validationSchema } from './validationSchema';

const EditProfileAddressContainer: FC = () => {
  const { showError, showSuccess } = useAlerts();
  const { user } = useStores();
  const { userProfile } = user;

  const initialValues = {
    zip_code: userProfile.address.zip_code || '',
    street: userProfile.address.street || '',
    number: userProfile.address.number || '',
    complement: userProfile.address.complement || '',
    district: userProfile.address.district || '',
    city: userProfile.address.city || '',
    state: userProfile.address.state || '',
    country: userProfile.address.country || '',
  };

  const onSubmit = async (
    values: FormEditProfileAddress,
    { setSubmitting }: FormikHelpers<FormEditProfileAddress>,
  ): Promise<void> => {
    const infoPerson = { ...values };

    try {
      setSubmitting(true);
      await user.profileAddressUpdate(infoPerson);
      showSuccess(strings('general.editingSuccess'));
      navigate(Routes.EDIT_PROFILE);
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
      <EditProfileAddress onGoBack={goBack} />
    </FormContainer>
  );
};

export default observer(EditProfileAddressContainer);
