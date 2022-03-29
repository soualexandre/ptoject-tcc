import React, { FC, useState } from 'react';
import { observer } from 'mobx-react';
import { FormContainer } from '~/components';
import { strings } from '~/locale';
import { FormikHelpers } from '~/modules';
import { NavigationActions } from '~/navigation';
import { useAlerts, useStores } from '~/utils';
import EditProfilePassword from './EditProfilePassword';
import { FormChangePassword, initialValues } from './formValues';
import { validationSchema } from './validationSchema';

const EditProfilePasswordContainer: FC = () => {
  const { user } = useStores();
  const { showError, showSuccess } = useAlerts();
  const [currentMask, setCurrentMask] = useState(true);
  const [newMask, setNewMask] = useState(true);
  const [confirmMask, setConfirmMask] = useState(true);

  const toggleCurrentMask = () => {
    setCurrentMask((oldstate) => !oldstate);
  };

  const toggleNewMask = () => {
    setNewMask((oldstate) => !oldstate);
  };

  const toggleConfirmMask = () => {
    setConfirmMask((oldstate) => !oldstate);
  };
  const onSubmit = async (
    values: FormChangePassword,
    { setSubmitting }: FormikHelpers<FormChangePassword>,
  ): Promise<void> => {
    try {
      setSubmitting(true);
      const data = {
        current_password: values.current,
        password: values.new,
        password_confirmation: values.confirm,
      };
      await user.changePassword(data);
      showSuccess(strings('changePassword.success'));
      NavigationActions.goBack();
    } catch ({ message }) {
      showError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <EditProfilePassword
        currentMask={currentMask}
        toggleCurrentMask={toggleCurrentMask}
        newMask={newMask}
        toggleNewMask={toggleNewMask}
        confirmMask={confirmMask}
        toggleConfirmMask={toggleConfirmMask}
      />
    </FormContainer>
  );
};

export default observer(EditProfilePasswordContainer);
