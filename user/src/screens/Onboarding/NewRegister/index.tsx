import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { FormContainer } from '~/components';
import { strings } from '~/locale';
import { navigate } from '~/navigation/actions';
import { Routes } from '~/navigation/routes';
import { USER_TYPE, getRawPhone, useAlerts, useStores } from '~/utils';
import { FormNewRegister } from './formValues';
import NewRegister from './NewRegister';
import { validationSchema } from './validationSchema';

const NewRegisterContainer: FC = () => {
  const [initialValues, setInitialValues] = useState({
    username: '',
    name: '',
    password: '',
    confirmPassword: '',
  });
  const [userType, setUserType] = useState(0);
  const [passwordMask, setPasswordMask] = useState(true);
  const [confirmMask, setConfirmMask] = useState(true);
  const { user } = useStores();
  const { showError, showSuccess } = useAlerts();
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordMask = () => {
    setPasswordMask((oldstate) => !oldstate);
  };

  const toggleConfirmMask = () => {
    setConfirmMask((oldstate) => !oldstate);
  };
  const loadInitialValues = () => {
    if (userType === USER_TYPE.INDIVIDUAL) {
      setInitialValues({
        name: user.userAuth.name || '',
        username: user.userAuth.username || '',
        password: user.userAuth.password || '',
        confirmPassword: user.userAuth.confirmPassword || '',
      });
    } else {
      setInitialValues({
        username: user.userAuthBusiness.username || '',
        name: user.userAuthBusiness.name || '',
        password: user.userAuthBusiness.password || '',
        confirmPassword: user.userAuthBusiness.confirmPassword || '',
      });
    }
  };

  useEffect(() => {
    loadInitialValues();
  }, []);

  const onSubmit = async (values: FormNewRegister): Promise<void> => {
    console.log('valores ----', values);
    await user.setUserAuthIndividual(values);
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
      <NewRegister
        userType={userType}
        isLoading={isLoading}
        onChangeRadioButton={setUserType}
        passwordMask={passwordMask}
        togglePasswordMask={togglePasswordMask}
        confirmMask={confirmMask}
        toggleConfirmMask={toggleConfirmMask}
      />
    </FormContainer>
  );
};

export default observer(NewRegisterContainer);
