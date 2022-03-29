import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { FormContainer } from '~/components';
import { navigate } from '~/navigation/actions';
import { Routes } from '~/navigation/routes';
import { USER_TYPE, getRawPhone, useStores } from '~/utils';
import { FormNewRegister } from './formValues';
import NewRegister from './NewRegister';
import { validationSchema } from './validationSchema';

const NewRegisterContainer: FC = () => {
  const [initialValues, setInitialValues] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [userType, setUserType] = useState(0);
  const [passwordMask, setPasswordMask] = useState(true);
  const [confirmMask, setConfirmMask] = useState(true);
  const { user } = useStores();

  const togglePasswordMask = () => {
    setPasswordMask((oldstate) => !oldstate);
  };

  const toggleConfirmMask = () => {
    setConfirmMask((oldstate) => !oldstate);
  };
  const loadInitialValues = () => {
    if (userType === USER_TYPE.INDIVIDUAL) {
      setInitialValues({
        email: user.userAuth.email || '',
        phone: user.userAuth.phone || '',
        password: user.userAuth.password || '',
        confirmPassword: user.userAuth.confirmPassword || '',
      });
    } else {
      setInitialValues({
        email: user.userAuthBusiness.email || '',
        phone: user.userAuthBusiness.phone || '',
        password: user.userAuthBusiness.password || '',
        confirmPassword: user.userAuthBusiness.confirmPassword || '',
      });
    }
  };

  useEffect(() => {
    loadInitialValues();
  }, []);

  const onSubmit = (values: FormNewRegister): void => {
    user.setUserType(userType);

    values.phone = getRawPhone(values.phone);

    if (userType === USER_TYPE.INDIVIDUAL) {
      user.setUserAuthIndividual(values);
      navigate(Routes.ONBOARDING_INFO_PERSON);
    } else {
      user.setUserAuthBusiness(values);
      navigate(Routes.ONBOARDING_INFO_ENTERPRISE);
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
